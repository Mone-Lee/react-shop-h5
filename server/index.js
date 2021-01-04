const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:8080")
  await next()
})

router.prefix('/api');
router.post('/register', (ctx, next) => {
  ctx.body = 'register request';
})

app
  .use(router.routes())  // 启动路由
  .use(router.allowedMethods()) // 根据ctx.status设置response响应头
  .listen(3000, () => {
    console.log('server is running on port: 3000')
  })

