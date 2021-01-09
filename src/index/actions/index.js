import http from '../../../assets/utils/http';

import {
  GET_SLIDER_IMAGES_SUCCESS,
} from '../constants/actionTypes'

export const getSliderImagesSuccess = (data) => {
  return {
    type: GET_SLIDER_IMAGES_SUCCESS,
    data
  }
}

export const getSliderImages = () => {
  return async (dispatch) => {
    const res = await http.post('index/sliderImages')

    if (res.errcode === 0) {
      dispatch(getSliderImagesSuccess(res.data))
    }

    return res;
  }
}