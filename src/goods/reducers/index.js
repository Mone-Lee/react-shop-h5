import { combineReducers } from 'redux';
import { goodsDetail, recommendGoods } from './goods';

export default combineReducers({
  goodsDetail,
  recommendGoods
})