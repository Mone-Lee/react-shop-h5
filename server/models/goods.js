const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GoodsSchema = new Schema({
  abilityMarkCodeList: Array,
  activityPrice: String,
  alias: String,
  bizMarkCode: String,
  buyUrl: String,
  buyWay: Number,
  goodsType: Number,
  height: String,
  id: Number,
  imageUrl: String,
  isVirtual: Number,
  origin: String,
  picture: Array,
  postage: Number,
  preSale: Boolean,
  price: String,
  sellPoint: String,
  soldStatus: Number,
  startSoldTime: Number,
  subTitle: String,
  title: String,
  totalSoldNum: Number,
  width: String,
  url: String,
  isHaitao: Number
})

const GoodsModel = mongoose.model('goods', GoodsSchema);
module.exports = GoodsModel;