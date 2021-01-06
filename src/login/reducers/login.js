import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants/actionTypes';

const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

export default login;