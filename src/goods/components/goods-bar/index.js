import React, { Component } from 'react';
import './index.less';

class GoodsBar extends Component {
  render() {
    return (
      <div className="goods-bar">
        <div className="goods-bar-item goods-actions">
          <div className="goods-action-item">
            <span className="iconfont iconkefu"></span>
            <p>客服</p>
          </div>
          <div className="goods-action-item">
            <span className="iconfont icondianpu"></span>
            <p>店铺</p>
          </div>
          <div className="goods-action-item">
            <span className="iconfont icongouwuche"></span>
            <p>购物车</p>
          </div>
        </div>

        <div className="goods-bar-item goods-operations">
          <div className="operate cart">加入购物车</div>
          <div className="operate buy">立即购买</div>
        </div>
      </div>
    )
  }
}

export default GoodsBar;