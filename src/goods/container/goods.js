import React, { Component } from 'react';
import TopBar from '../components/top-bar';
import GoodsInfo from '../components/goods-info';
import Recommend from '../components/recommend';
import GoodsBar from '../components/goods-bar';
import '../../../assets/icon/iconfont.css';
import { getUrlQuery } from '../../../assets/utils/common';
import http from '../../../assets/utils/http';

import { connect } from 'react-redux';
import { getGoodsDetail, getRecommendGoods } from '../actions';

class Goods extends Component {
  goodsDetail = {};
  recommendList = [];
  isEnd = false;

  componentDidMount() {
    const goodsId = getUrlQuery('gid');
    this.getGoodsDetail(goodsId);
    this.getRemmendGoods(goodsId);
    // http.post('goods/goodsDetail', { gid: goodsId });
    // http.post('goods/goodsRecommend', { gid: goodsId })
  }

  getGoodsDetail = async (goodsId) => {
    const { getGoodsDetail } = this.props;
    const res = await getGoodsDetail(goodsId);

    if (res && res.errcode === 0) {
      goodsDetail = res.data;
    }
  }

  getRemmendGoods = async (goodsId) => {
    const { getRecommendGoods } = this.props;
    const res = await getRecommendGoods(goodsId);

    if (res && res.errcode === 0) {
      recommendList = res.data.list;
      isEnd = !res.data.hasMore;
    }
  }

  render() {
    const { goodsDetail, recommendGoods } = this.props;
    const goodsList = recommendGoods.data ? recommendGoods.data.list : [];
    const isEnd = recommendGoods.data ? !recommendGoods.data.hasMore : false;

    return (
      <div className="goods">
        <TopBar />
        {
          goodsDetail && goodsDetail.data &&
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