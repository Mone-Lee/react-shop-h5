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
const SSR = require('../dist/index-server.js');
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');

ssrApp.use(static(path.resolve(__dirname , '../dist/')));

ssrRouter.get('/home', (ctx, next) => {
  const html = renderMarkup(renderToString(SSR));
  ctx.body = html;
  ctx.status = 200;
})

ssrApp
  .use(ssrRouter.routes())
  .use(ssrRouter.allowedMethods())
  .listen(3001, () => {
    console.log('ssr server is running on port: 3001');
  })

const renderMarkup = (str) => {
  const data = {
    title: 'goods'
  }
  const dataStr = JSON.stringify(data);
  return template
    .replace('<!--HTML_PLACEHOLDER-->', str)
    .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window.__initial_data=${dataStr}</script>`);
}