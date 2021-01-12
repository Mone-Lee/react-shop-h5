import { combineReducers } from 'redux';
import slider from './slider';
import goodsList from './goodsList';

export default combineReducers({
  slider,
  goodsList
});