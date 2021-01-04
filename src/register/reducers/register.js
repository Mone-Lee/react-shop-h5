import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../constants/actionTypes'

const register = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return state;
    case REGISTER_SUCCESS:
    case REGISTER_ERROR:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
};

export default register;