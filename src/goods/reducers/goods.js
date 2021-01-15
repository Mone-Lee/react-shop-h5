import {
  GET_GOODS_DETAIL,
  GET_RECOMMEND_GOODS
} from '../constants/actionTypes';

export const goodsDetail = (state={}, action) => {
  switch (action.type) {
    case GET_GOODS_DETAIL:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export const recommendGoods = (state={}, action) => {
  switch (action.type) {
    case GET_RECOMMEND_GOODS:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}