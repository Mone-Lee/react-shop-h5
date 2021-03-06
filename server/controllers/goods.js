const GoodsModel = require('../models/goods');

class GoodsController {
  /**
   * 商品信息入库逻辑
   * @param {*} ctx
   */
  static async addGoods(ctx) {
    const res = await GoodsModel.create([
      {"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"69.00","alias":"2ok6xxln05rzs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877396377,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FlpQY26vC-596ATlJIYbPQmtJNe8.jpg","isVirtual":0,"origin":"99","picture":[{"height":800,"id":2884942967,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FlpQY26vC-596ATlJIYbPQmtJNe8.jpg","width":800}],"postage":0,"preSale":false,"price":"69.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 主题个性抱枕","totalSoldNum":3,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2ok6xxln05rzs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"69.00","alias":"2fmox8qf9qyx4","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890522576,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FuWQysTKA-o2nNj6tYAGnB_sdHtJ.jpg","isVirtual":0,"origin":"99","picture":[{"height":800,"id":2613298801,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FuWQysTKA-o2nNj6tYAGnB_sdHtJ.jpg","width":800},{"height":800,"id":2613298770,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FoUZI3s6LA78MIKZcVxrOF1junZG.jpg","width":800}],"postage":0,"preSale":false,"price":"69.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"原创 | 主题极简帆布包","totalSoldNum":2,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fmox8qf9qyx4","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"39.00","alias":"3nrqwihqawp1k","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890522046,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FhpruA3JxpwtsebUJNth8_w3oCPF.jpg","isVirtual":0,"origin":"59","picture":[{"height":800,"id":2613288137,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FhpruA3JxpwtsebUJNth8_w3oCPF.jpg","width":800}],"postage":0,"preSale":false,"price":"39.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 自在生长鼠标垫","totalSoldNum":1,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/3nrqwihqawp1k","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"169.00","alias":"2fnythno88p2g","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877393744,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FmkSOILCU5xhx7AvJpCBJ3yJm27o.jpg","isVirtual":0,"origin":"199","picture":[{"height":800,"id":2884805729,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FmkSOILCU5xhx7AvJpCBJ3yJm27o.jpg","width":800}],"postage":0,"preSale":false,"price":"169.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 自在生长系列装饰画","totalSoldNum":0,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fnythno88p2g","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"90.00","alias":"36dxrteoz7kyw","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877382423,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/Fu09HvJi3lvvLLwHhjpxcNHC8R4h.jpg","isVirtual":0,"origin":"100-00","picture":[{"height":800,"id":2884737086,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/Fu09HvJi3lvvLLwHhjpxcNHC8R4h.jpg","width":800}],"postage":0,"preSale":false,"price":"90.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 主题 100 元充值卡 （ 预售期间 购六赠二！）","totalSoldNum":1,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/36dxrteoz7kyw","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"89.00","alias":"3nrq1ggd3lvbs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877291566,"imageUrl":"https://img.yzcdn.cn/upload_files/2021/01/06/FvUUX0V86C_D4SH-mzpoIQVop7kl.jpg","isVirtual":0,"origin":"109","picture":[{"height":800,"id":2904308529,"url":"https://img.yzcdn.cn/upload_files/2021/01/06/FvUUX0V86C_D4SH-mzpoIQVop7kl.jpg","width":800}],"postage":0,"preSale":false,"price":"89.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 极简棒球帽","totalSoldNum":0,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/3nrq1ggd3lvbs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"119.00","alias":"362v0um8kgizs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877283257,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/Fs4fJ_kAsWC4ZIX7EBkyfgJ79twS.jpg","isVirtual":0,"origin":"149","picture":[{"height":800,"id":2613082659,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/Fs4fJ_kAsWC4ZIX7EBkyfgJ79twS.jpg","width":800}],"postage":0,"preSale":false,"price":"119.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 2021 春季新品系列限定 T 恤","totalSoldNum":2,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/362v0um8kgizs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"99.00","alias":"2fmqh8rv0c9t4","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890529206,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FusVrfwNfA4GeWwPLbSU0VO4MSiz.jpg","isVirtual":0,"origin":"119","picture":[{"height":800,"id":2613077350,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FusVrfwNfA4GeWwPLbSU0VO4MSiz.jpg","width":800}],"postage":0,"preSale":false,"price":"99.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"","title":"极客原创 | 2021 赋能周历本","totalSoldNum":4,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fmqh8rv0c9t4","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"29.00","alias":"360fdi799flnc","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890447147,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FozOo0GSJOZ7qC0T3-ECFvcZza4k.jpg","isVirtual":0,"origin":"49","picture":[{"height":800,"id":2612877195,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FozOo0GSJOZ7qC0T3-ECFvcZza4k.jpg","width":800}],"postage":0,"preSale":false,"price":"29.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"别人玩扑克是平凡的消遣，而你，是开发者在艺术氛围中的脑力较量。","title":"极客原创 | 主题扑克牌","totalSoldNum":5,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/360fdi799flnc","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"49.00","alias":"2oe29fmnvquiw","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":890531606,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FrAd0LVsDr_9BqIEdUjBRg0xYxUP.jpg","isVirtual":0,"origin":"69","picture":[{"height":800,"id":2884618381,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FrAd0LVsDr_9BqIEdUjBRg0xYxUP.jpg","width":800}],"postage":0,"preSale":false,"price":"49.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"时常提醒自己，不要把压力和问题都留到最后一天；安排得理，才不自乱阵脚。","title":"极客原创 | 办公必备便利贴","totalSoldNum":0,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2oe29fmnvquiw","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"49.00","alias":"3nsyq9tt42mzs","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877289529,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/FivRlMm445cuWSq8oSYj0zpaGkjd.jpg","isVirtual":0,"origin":"69","picture":[{"height":800,"id":2884639783,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/FivRlMm445cuWSq8oSYj0zpaGkjd.jpg","width":800}],"postage":0,"preSale":false,"price":"49.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"多喝水，好的身体是最重要的一步。","title":"极客原创 | 简约陶瓷马克杯","totalSoldNum":2,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/3nsyq9tt42mzs","isHaitao":0},{"abilityMarkCodeList":[20001,30002,10012,30007,10020,10022,10023,10021],"activityPrice":"69.00","alias":"2fqdygx0c8208","bizMarkCode":"000000000000","buyUrl":"","buyWay":1,"goodsType":0,"height":"800","id":877279524,"imageUrl":"https://img.yzcdn.cn/upload_files/2020/12/29/Fneyw3ruUiMfW9qFSrEJeD6Nc2kr.jpg","isVirtual":0,"origin":"89","picture":[{"height":800,"id":2884703630,"url":"https://img.yzcdn.cn/upload_files/2020/12/29/Fneyw3ruUiMfW9qFSrEJeD6Nc2kr.jpg","width":800}],"postage":0,"preSale":false,"price":"69.00","sellPoint":"","soldStatus":1,"startSoldTime":0,"subTitle":"一个本子，一种态度。","title":"极客原创 | 赋能金句本","totalSoldNum":19,"width":"800","url":"https://shop18793264.youzan.com/v2/goods/2fqdygx0c8208","isHaitao":0}
    ])

    if (res) {
      ctx.body = {
        errcode: 0,
        errmsg: 'add goods success',
        data: {
          list: res
        },
        token: ''
      }

      ctx.status =  200;
    } else {
      ctx.body = {
        errcode: -1,
        errmsg: 'add goods fails',
        token: '',
        data: null
      };
      ctx.status = 200;
    }
  }

  /**
   * 获取首页商品列表逻辑
   * @param {*} ctx
   */
  static async getGoodsList(ctx) {
    const res = await GoodsModel.find();

    if (res) {
      ctx.body = {
        errcode: 0,
        errmsg: 'search goods list success',
        data: {
          list: res,
          hasMore: false
        },
        token: ''
      }

      ctx.status =  200;
    } else {
      ctx.body = {
        errcode: -1,
        errmsg: 'search goods list fail',
        token: '',
        data: null
      };
      ctx.status = 200;
    }
  }

  /**
   * 根据商品id获取商品详情信息
   * @param {*} ctx
   */
  static async getGoodsDetail(ctx) {
    const gid = Number(ctx.request.body.gid);
    const res = await GoodsModel.findOne({ id: gid });

    if (res) {
      ctx.body = {
        errcode: 0,
        errmsg: 'get goods detail',
        token: '',
        data: res,
      };
      ctx.status = 200;
    } else {
      ctx.body = {
        errcode: -1,
        errmsg: '不存在该商品',
        token: '',
        data: null
      };
      ctx.status = 200;
    }
  }

  /**
   * 获取商品相关推荐
   * @param {*} ctx
   */
  static async getGoodsRecommend(ctx) {
    const res = await GoodsModel.find();

    let arr = res.filter((goods) => {
      return goods.id !== Number(ctx.request.body.gid)
    });
    arr = arr.slice(0, 6);

    if (arr) {
      ctx.body = {
        errcode: 0,
        errmsg: 'goods recommend list',
        data: {
          list: arr,
          hasMore: false
        },
        token: ''
      }

      ctx.status =  200;
    } else {
      ctx.body = {
        errcode: -1,
        errmsg: 'get goods recommend list fail',
        token: '',
        data: null
      };
      ctx.status = 200;
    }
  }
}

module.exports = {
  addGoods: GoodsController.addGoods,
  getGoodsList: GoodsController.getGoodsList,
  getGoodsDetail: GoodsController.getGoodsDetail,
  getGoodsRecommend: GoodsController.getGoodsRecommend
}