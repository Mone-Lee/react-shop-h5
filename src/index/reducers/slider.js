import {
  GET_SLIDER_IMAGES_SUCCESS
} from '../constants/actionTypes';

const slider = (state = {}, action) => {
  switch (action.type) {
    case GET_SLIDER_IMAGES_SUCCESS:
      return {
        ...state,
        imageList: action.data
      }
    default:
      return state;
  }
};

export default slider;