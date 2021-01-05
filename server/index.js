const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// 引入koa-bodyparser中间件，这个中间件可以将post请求的参数转为json格式返回
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Credentials", true);
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  ctx.set("X-Powered-By", ' 3.2.1');
  ctx.set("Content-Type", "application/json;charset=utf-8");
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200
  }
  await next();
})

router.prefix('/api');
router.post('/user/register', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
  ctx.status = 200;
})

app
  .use(router.routes())  // 启动路由
  .use(router.allowedMethods()) // 根据ctx.status设置response响应头
  .listen(3000, () => {
    console.log('server is running on port: 3000')
  })

