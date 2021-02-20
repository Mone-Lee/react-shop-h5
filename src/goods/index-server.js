const React = require('react');
const { createApp } = require('./app');
const { getGoodsDetailSuccess, getRecommendGoodsSuccess } = require('./actions');

const app = (context, data) => {
  const { app, store } = createApp();
  store.dispatch(getGoodsDetailSuccess(data['goodsDetail']));
  store.dispatch(getRecommendGoodsSuccess(data['recommendGoods']));
  return app;
}

module.exports = app;