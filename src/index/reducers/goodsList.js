import {
  GET_INDEX_GOODS_LIST
} from '../constants/actionTypes';

const goodsList = (state={}, action) => {
  switch (action.type) {
    case GET_INDEX_GOODS_LIST:
      return {
        ...state,
        goodsList: action.data
      };
    default:
      return state;
  }
}

export default goodsList;