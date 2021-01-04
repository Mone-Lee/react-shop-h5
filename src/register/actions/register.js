import http from '../../assets/utils/http';
// import axios from 'axios';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../constants/actionTypes'

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  }
}

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    data
  }
}

export const registerError = (data) => {
  return {
    type: REGISTER_ERROR,
    data
  }
}

export const register = (username, password, email) => {
  return async (dispatch) => {
    dispatch(registerRequest());

    const res = await http.post('register', {
      username,
      password,
      email
    })

    if (res.errcode === 0) {
      dispatch(registerSuccess({
        username,
        password,
        email
      }))
    } else {
      dispatch(registeError());
    }
  }
}