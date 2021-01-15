import React, { Component } from 'react';
import Slider from '../../../index/components/slider';
import goods from '../../container/goods';
import GoodsImages from '../goods-images';
import './index.less';

class GoodsInfo extends Component {

  render() {
    const { goodsDetail } = this.props;

    let imageList = []
    if (goodsDetail && goodsDetail.picture) {
      imageList = goodsDetail.picture.reduce((arr, pic, index) => {
        arr.push(pic.url);
        return arr;
      }, [])
    }
    
    return (
      <div className="goods-info">
        {
          imageList &&
          <Slider imageList={imageList} />
        }

        <div className="info-item goods-base-info">
          <div className="goods-price sale-price">￥ <p>{ goodsDetail.price }</p></div>
          <div className="goods-price origin-price">价格 <p>￥{ goodsDetail.origin }</p></div>
          <div className="goods-title-line">
            <h2 className="goods-title">{ goodsDetail.title }</h2>
            <div className="share">
              <span className="iconfont iconfenxiang"></span>
              <p>分享</p>
            </div>
          </div>
        </div>

        <div className="info-item fee-info">
          <div className="label">运费</div>
          <div className="value">免运费</div>
        </div>

        <GoodsImages imageList={imageList} />
      </div>
    )
  }
}

export default GoodsInfo;