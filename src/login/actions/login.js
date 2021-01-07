import http from '../../assets/utils/http';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants/actionTypes'

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

export const loginError = () => {
  return {
    type: LOGIN_ERROR
  }
}

export const login = (username, password) => {
  return async dispatch => {
    dispatch(loginRequest());

    const res = await http.post('user/login', {username, password})
    if (res.errcode === 0) {
      dispatch(loginSuccess({username, password}))
    } else {
      dispatch(loginError());
    }

    return res;
  }
}