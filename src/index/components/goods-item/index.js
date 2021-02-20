import React, { Component } from 'react';
import './index.less';

class GoodsItem extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const { imageUrl, title, price, id } = this.props;
    const env = process.env.NODE_ENV;

    return (
      <a className="goods-item" href={env  === 'development' ? `/goods.html?gid=${id}` : `/goods/${id}`}>
        <div className="goods-photo">
          <img src={ imageUrl } />
        </div>
        <div className="goods-info">
          <div className="goods-title">{ title }</div>
          <div className="goods-price">
            <div className="sale-price">￥{ price }</div>
          </div>
        </div>
      </a>
    )
  }
}

export default GoodsItem;