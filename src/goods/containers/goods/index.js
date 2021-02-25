import React, { Component } from 'react';
import TopBar from '../../components/top-bar';
import GoodsInfo from '../../components/goods-info';
import Recommend from '../../components/recommend';
import GoodsBar from '../../components/goods-bar';
import '../../../../assets/icon/iconfont.css';
import { getUrlQuery } from '../../../../assets/utils/common';
import http from '../../../../assets/utils/http';

import { connect } from 'react-redux';
import { getGoodsDetail, getRecommendGoods } from '../../actions';

class Goods extends Component {

  componentDidMount() {
    let goodsId = '';
    if (process.env.NODE_ENV === 'development') {
      goodsId = getUrlQuery('gid')
    } else {
      goodsId = Number(location.href.match(/\/goods\/(\d+)/)[1]);
    }
    this.getGoodsDetail(goodsId);
    this.getRemmendGoods(goodsId);
    // http.post('goods/goodsDetail', { gid: goodsId });
    // http.post('goods/goodsRecommend', { gid: goodsId })
  }

  getGoodsDetail = async (goodsId) => {
    const { getGoodsDetail } = this.props;
    getGoodsDetail(goodsId);
  }

  getRemmendGoods = async (goodsId) => {
    const { getRecommendGoods } = this.props;
    getRecommendGoods(goodsId);
  }

  render() {
    const { goodsDetail, recommendGoods } = this.props;
    const goodsList = recommendGoods.data ? recommendGoods.data.list : [];
    const isEnd = recommendGoods.data ? !recommendGoods.data.hasMore : false;

    return (
      <div className="goods">
        <TopBar />
        {
          goodsDetail &&
          <GoodsInfo goodsDetail={goodsDetail.data} />
        }
        <Recommend isEnd={isEnd} goodsList={goodsList} />
        <GoodsBar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getGoodsDetail: (goodsId) => {
    dispatch(getGoodsDetail(goodsId))
  },
  getRecommendGoods: (goodsId) => {
    dispatch(getRecommendGoods(goodsId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Goods);