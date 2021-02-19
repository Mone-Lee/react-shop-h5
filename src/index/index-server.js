const React = require('react');
const { createApp } = require('./app');
const { getSliderImagesSuccess, getIndexGoodsListSuccess } = require('./actions');

const app = (context, data) => {
  const { app, store } = createApp();
  store.dispatch(getSliderImagesSuccess(data.slider));
  store.dispatch(getIndexGoodsListSuccess(data.goodsList));
  return app;
}

module.exports = app;