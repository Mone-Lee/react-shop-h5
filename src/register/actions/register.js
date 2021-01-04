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
  return dispatch => {
    dispatch(registerRequest());

    return setTimeout(() => {
      dispatch(registerSuccess({
        username,
        password,
        email
      }))
    }, 100)  
  }
}