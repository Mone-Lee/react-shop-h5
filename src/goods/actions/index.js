import {
  GET_GOODS_DETAIL,
  GET_RECOMMEND_GOODS
} from '../constants/actionTypes';
import http from '../../../assets/utils/http';

export const getGoodsDetailSuccess = (data) => {
  return {
    type: GET_GOODS_DETAIL,
    data
  }
}

export const getGoodsDetail = (goodsId) => {
  return async dispatch => {
    const res = await http.post('goods/goodsDetail', { gid: goodsId });
    
    if (res.errcode === 0) {
      dispatch(getGoodsDetailSuccess(res.data));
      return res;
    } else {
      return null;
    }
  }
}

export const getRecommendGoodsSuccess = (data) => {
  return {
    type: GET_RECOMMEND_GOODS,
    data
  }
}

export const getRecommendGoods = (goodsId) => {
  return async dispatch => {
    const res = await http.post('goods/goodsRecommend', { gid: goodsId });
    
    if (res.errcode === 0) {
      dispatch(getRecommendGoodsSuccess(res.data));
      return res;
    } else {
      return null;
    }
  }
}