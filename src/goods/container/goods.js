import React, { Component } from 'react';
import TopBar from '../components/top-bar';
import GoodsInfo from '../components/goods-info';
import '../../../assets/icon/iconfont.css';

class Goods extends Component {
  render() {
    return (
      <div className="goods">
        <TopBar />
        <GoodsInfo />
      </div>
    )
  }
}

export default Goods;