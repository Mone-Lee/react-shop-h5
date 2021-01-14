import React, { Component } from 'react';
import './index.less';

class GoodsItem extends Component {
  constructor() {
    super(...arguments);
  }

  pageToDetail = () => {
    const { id } = this.props;
    window.location.href = `/goods.html?gid=${id}`;
  }

  render() {
    const { imageUrl, title, price } = this.props;

    return (
      <div className="goods-item" onClick={this.pageToDetail}>
        <div className="goods-photo">
          <img src={ imageUrl } />
        </div>
        <div className="goods-info">
          <div className="goods-title">{ title }</div>
          <div className="goods-price">
            <div className="sale-price">￥{ price }</div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoodsItem;