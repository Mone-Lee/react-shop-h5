import React, { Component } from 'react';
import Slider from '../../../index/components/slider';
import GoodsImages from '../goods-images';
import './index.less';

class GoodsInfo extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      goodsImages: [
        'https://img.yzcdn.cn/upload_files/2020/12/29/FoUZI3s6LA78MIKZcVxrOF1junZG.jpg!large.webp',
        'https://img.yzcdn.cn/upload_files/2020/12/29/FuWQysTKA-o2nNj6tYAGnB_sdHtJ.jpg!large.webp'
      ],
      detailImages: [
        'https://img.yzcdn.cn/upload_files/2020/12/29/FrWZ0DGgGUYpPsTts-5GSiTgt1mN.jpg!large.webp',
        'https://img.yzcdn.cn/upload_files/2020/12/29/FkUbLDPnJ7FJQnIuLmEOeNBoVMDA.jpg!large.webp'
      ]
    }
  }

  render() {
    const { goodsImages, detailImages } = this.state;

    return (
      <div className="goods-info">
        <Slider imageList={goodsImages} />

        <div className="info-item goods-base-info">
          <div className="goods-price sale-price">￥ <p>69.00</p></div>
          <div className="goods-price origin-price">价格 <p>￥99</p></div>
          <div className="goods-title-line">
            <h2 className="goods-title">原创 | 主题极简帆布包</h2>
            <div className="share">
              <span className="iconfont iconfenxiang"></span>
              <p>分享</p>
            </div>
          </div>
        </div>

        <div className="info-item fee-info">
          <div class="label">运费</div>
          <div class="value">免运费</div>
        </div>

        <GoodsImages imageList={detailImages} />

      </div>
    )
  }
}

export default GoodsInfo;