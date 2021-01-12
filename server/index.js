const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const user = require('./controllers/user');

// 连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/react_shop_h5');
mongoose.connection.once("open", () => {
  console.log('数据库链接成功')
})

// 引入koa-bodyparser中间件，这个中间件可以将post请求的参数转为json格式返回
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());

// 处理跨域问题
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
// 注册接口
router.post('/user/register', user.register);
// 登录接口
router.post('/user/login', user.login);

// 获取首页轮播图接口
router.post('/index/sliderImages', (ctx, next) => {
  ctx.body = {
    errcode: 0,
    data: [
      'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png',
      'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png',
      'https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png'
    ],
    errmsg: '',
    token: ''
  }

  ctx.status = 200;
});
// 获取首页商品列表接口
router.post('/index/goodsList', (ctx, next) => {
  ctx.body = {
    errcode: 0,
    errmsg: '',
    token: '',
    data: {
      list: [
        {"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"69.00","alias":"2ok6xxln05rzs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877396377,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FlpQY26vC-596ATlJIYbPQmtJNe8.jpg","isVirtual":0,"origin":"99","picture":[{"height":800,"id":2884942967,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FlpQY26vC-596ATlJIYbPQmtJNe8.jpg","width":800}],"postage":0,"preSale":false,"price":"69.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 主题个性抱枕","totalSoldNum":3,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2ok6xxln05rzs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"69.00","alias":"2fmox8qf9qyx4","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890522576,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FuWQysTKA-o2nNj6tYAGnB_sdHtJ.jpg","isVirtual":0,"origin":"99","picture":[{"height":800,"id":2613298801,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FuWQysTKA-o2nNj6tYAGnB_sdHtJ.jpg","width":800},{"height":800,"id":2613298770,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FoUZI3s6LA78MIKZcVxrOF1junZG.jpg","width":800}],"postage":0,"preSale":false,"price":"69.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"原创 | 主题极简帆布包","totalSoldNum":2,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fmox8qf9qyx4","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"39.00","alias":"3nrqwihqawp1k","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890522046,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FhpruA3JxpwtsebUJNth8_w3oCPF.jpg","isVirtual":0,"origin":"59","picture":[{"height":800,"id":2613288137,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FhpruA3JxpwtsebUJNth8_w3oCPF.jpg","width":800}],"postage":0,"preSale":false,"price":"39.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 自在生长鼠标垫","totalSoldNum":1,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/3nrqwihqawp1k","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"169.00","alias":"2fnythno88p2g","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877393744,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FmkSOILCU5xhx7AvJpCBJ3yJm27o.jpg","isVirtual":0,"origin":"199","picture":[{"height":800,"id":2884805729,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FmkSOILCU5xhx7AvJpCBJ3yJm27o.jpg","width":800}],"postage":0,"preSale":false,"price":"169.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 自在生长系列装饰画","totalSoldNum":0,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fnythno88p2g","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"90.00","alias":"36dxrteoz7kyw","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877382423,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/Fu09HvJi3lvvLLwHhjpxcNHC8R4h.jpg","isVirtual":0,"origin":"100-00","picture":[{"height":800,"id":2884737086,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/Fu09HvJi3lvvLLwHhjpxcNHC8R4h.jpg","width":800}],"postage":0,"preSale":false,"price":"90.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 主题 100 元充值卡 （ 预售期间 购六赠二！）","totalSoldNum":1,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/36dxrteoz7kyw","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"89.00","alias":"3nrq1ggd3lvbs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877291566,"imageUrl":"https://img.yzcdn.cn/upload_files/2021/01/06/FvUUX0V86C_D4SH-mzpoIQVop7kl.jpg","isVirtual":0,"origin":"109","picture":[{"height":800,"id":2904308529,"url":"https://img.yzcdn.cn/upload_files/2021/01/06/FvUUX0V86C_D4SH-mzpoIQVop7kl.jpg","width":800}],"postage":0,"preSale":false,"price":"89.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 极简棒球帽","totalSoldNum":0,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/3nrq1ggd3lvbs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"119.00","alias":"362v0um8kgizs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877283257,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/Fs4fJ_kAsWC4ZIX7EBkyfgJ79twS.jpg","isVirtual":0,"origin":"149","picture":[{"height":800,"id":2613082659,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/Fs4fJ_kAsWC4ZIX7EBkyfgJ79twS.jpg","width":800}],"postage":0,"preSale":false,"price":"119.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 2021 春季新品系列限定 T 恤","totalSoldNum":2,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/362v0um8kgizs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"99.00","alias":"2fmqh8rv0c9t4","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890529206,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FusVrfwNfA4GeWwPLbSU0VO4MSiz.jpg","isVirtual":0,"origin":"119","picture":[{"height":800,"id":2613077350,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FusVrfwNfA4GeWwPLbSU0VO4MSiz.jpg","width":800}],"postage":0,"preSale":false,"price":"99.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 2021 赋能周历本","totalSoldNum":4,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fmqh8rv0c9t4","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"29.00","alias":"360fdi799flnc","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890447147,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FozOo0GSJOZ7qC0T3-ECFvcZza4k.jpg","isVirtual":0,"origin":"49","picture":[{"height":800,"id":2612877195,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FozOo0GSJOZ7qC0T3-ECFvcZza4k.jpg","width":800}],"postage":0,"preSale":false,"price":"29.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"别人玩扑克是平凡的消遣，而你，是开发者在艺术氛围中的脑力较量。","title":"极客原创 | 主题扑克牌","totalSoldNum":5,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/360fdi799flnc","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"49.00","alias":"2oe29fmnvquiw","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890531606,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FrAd0LVsDr_9BqIEdUjBRg0xYxUP.jpg","isVirtual":0,"origin":"69","picture":[{"height":800,"id":2884618381,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FrAd0LVsDr_9BqIEdUjBRg0xYxUP.jpg","width":800}],"postage":0,"preSale":false,"price":"49.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"时常提醒自己，不要把压力和问题都留到最后一天；安排得理，才不自乱阵脚。","title":"极客原创 | 办公必备便利贴","totalSoldNum":0,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2oe29fmnvquiw","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"49.00","alias":"3nsyq9tt42mzs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877289529,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FivRlMm445cuWSq8oSYj0zpaGkjd.jpg","isVirtual":0,"origin":"69","picture":[{"height":800,"id":2884639783,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FivRlMm445cuWSq8oSYj0zpaGkjd.jpg","width":800}],"postage":0,"preSale":false,"price":"49.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"多喝水，好的身体是最重要的一步。","title":"极客原创 | 简约陶瓷马克杯","totalSoldNum":2,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/3nsyq9tt42mzs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"69.00","alias":"2fqdygx0c8208","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877279524,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/Fneyw3ruUiMfW9qFSrEJeD6Nc2kr.jpg","isVirtual":0,"origin":"89","picture":[{"height":800,"id":2884703630,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/Fneyw3ruUiMfW9qFSrEJeD6Nc2kr.jpg","width":800}],"postage":0,"preSale":false,"price":"69.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"一个本子，一种态度。","title":"极客原创 | 赋能金句本","totalSoldNum":19,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fqdygx0c8208","isHaitao":0}
      ]
    }
  }
});

app
  .use(router.routes())  // 启动路由
  .use(router.allowedMethods()) // 根据ctx.status设置response响应头
  .listen(3000, () => {
    console.log('server is running on port: 3000')
  })

