if (typeof window === 'undefined') {
  global.window = {}
}

const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const ssrApp = new Koa();
const ssrRouter = new Router();
const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');
const app = require('../dist/index-server.js');
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
const axios = require('axios');
const baseUrl = 'http://127.0.0.1:3000/api/';

ssrApp.use(static(path.resolve(__dirname , '../dist/')));

ssrRouter.get('/index', async (ctx, next) => {
  // 页面路由的参数可以从这里获取，例如商品详情页的goodsid， 如果在index-server.js文件中需要（例如接口请求），则可以从传入的context中获取
  ctx.title = 'index';

  // 请求页面数据
  const data = {}
  const res1 = await axios.post(baseUrl + 'index/sliderImages');
  data['slider'] = res1.data.data;
  const res2 = await axios.post(baseUrl + 'index/goodsList');
  data['goodsList'] = res2.data.data;

  const render = servreRender(app, ctx, data);
  
  const html = renderMarkup(renderToString(render), data);
  ctx.body = html;
  ctx.status = 200;
})

const servreRender = (app, ctx, data) => {
  return app(ctx, data);
}

ssrApp
  .use(ssrRouter.routes())
  .use(ssrRouter.allowedMethods())
  .listen(3001, () => {
    console.log('ssr server is running on port: 3001');
  })

const renderMarkup = (str, data) => {
  const dataStr = JSON.stringify(data);
  return template
    .replace('<!--HTML_PLACEHOLDER-->', str)
    .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.__initial_data=${dataStr}</script>`);
}