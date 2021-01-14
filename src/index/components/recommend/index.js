import React, { Component } from 'react';
import GoodsItem from '../goods-item';
import './index.less';

class Recommend extends Component {

  renderFooter() {
    const { isEnd } = this.props;
    return isEnd ?
      <div className="no-more">- 我是有底线的 -</div>
      : null
  }
  
  render() {
    const { goodsList } = this.props;

    return (
      <div className="recommend">
        <div className="recommend-banner">
          <img src={ require('./images/recommend-banner.jpg').default } />
        </div>
        <div className="goods-list">
          {
            goodsList && goodsList.map((goods) => (
              <GoodsItem key={goods.id} imageUrl={goods.imageUrl} title={goods.title} price={goods.price} id={goods.id} />
            ))
          }
        </div>
        { this.renderFooter() }
      </div>
    )
  }
}

export default Recommend;