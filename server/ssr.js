if (typeof window === 'undefined') {
  global.window = {}
}

const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
require('babel-polyfill');
const dataCache = require('./dataCache');
const ssrApp = new Koa();
const ssrRouter = new Router();
const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');
const axios = require('axios');
const baseUrl = 'http://127.0.0.1:3000/api/';

ssrApp.use(static(path.resolve(__dirname , '../dist/')));

ssrRouter.get('/index', async (ctx, next) => {
  let data = {}
  if (dataCache.has['index']) {
    data = Object.assign({}, dataCache.peek('index'));
  } else {
    // 页面路由的参数可以从这里获取，例如商品详情页的goodsid， 如果在index-server.js文件中需要（例如接口请求），则可以从传入的context中获取
    data = {
      title: '首页',
      meta: `
        <meta property="og:title" content="首页">
      `
    }

    // 请求页面数据
    const res1 = await axios.post(baseUrl + 'index/sliderImages');
    data['slider'] = res1.data.data;
    const res2 = await axios.post(baseUrl + 'index/goodsList');
    data['goodsList'] = res2.data.data;

    let key = 'index';
    data['cacheKey'] = key;
    dataCache.set(key, data);
  }

  const render = servreRender(ctx, data);
  const html = renderMarkup('index', renderToString(render), data);
  ctx.body = html;
  ctx.status = 200;
})

ssrRouter.get('/goods/:goodsId', async (ctx, next) => {
  let data = {}
  let key = `goods${ctx.params.goodsId}`;
  if (dataCache.has[key]) {
    data = Object.assign({}, dataCache.peek(key));
  } else {
    const goodsId = Number(ctx.params.goodsId);
    data = {
      goodsId: goodsId
    };

    // 请求页面数据
    const res1 = await axios.post(baseUrl + 'goods/goodsDetail', { gid: goodsId });
    data['goodsDetail'] = res1.data.data;
    data['title'] = res1.data.data.title;
    data['meta'] = `
      <meta property="og:title" content="${res1.data.data.title}">
    `
    const res2 = await axios.post(baseUrl + 'goods/goodsRecommend', { gid: goodsId });
    data['recommendGoods'] = res2.data.data;

    data['cacheKey'] = key;
    dataCache.set(key, data);
  }

  const render = servreRender(ctx, data);
  const html = renderMarkup('goods', renderToString(render), data);
  ctx.body = html;
  ctx.status = 200;
})

// 客户端从缓存中获取对应的初始化页面数据，而不是从window.__INITIAL_STATE__中获取，防止数据过多暴露
ssrRouter.get('/data-cache/:key', async (ctx) => {
  let key = ctx.params.key;
  ctx.body = dataCache.peek(key);
})


const servreRender = (ctx, data) => {
  let name = ctx.url.match(/\/(\w+)($|\/)/)[1];
  const app = require(`../dist/static/${name}-server.js`);
  return app(ctx, data);
}

ssrApp
  .use(ssrRouter.routes())
  .use(ssrRouter.allowedMethods())
  .listen(3001, () => {
    console.log('ssr server is running on port: 3001');
  })

const renderMarkup = (name, str, data) => {
  const cacheKey = data['cacheKey']
  const dataStr = JSON.stringify(data);
  const template = fs.readFileSync(path.join(__dirname, `../dist/${name}.html`), 'utf-8');

  return template
    .replace('<!--PAGE_TITLE-->', data.title)
    .replace('<!--PAGE_META-->', data.meta || '')
    .replace('<!--HTML_PLACEHOLDER-->', str)
    .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.cachekey='${cacheKey}';</script>`);
}