import React, { Component } from 'react';
import TopBar from '../../components/top-bar';
import Slider from '../../components/slider';
import Recommend from '../../components/recommend';
import BottomBar from '../../components/bottom-bar';
import { connect } from 'react-redux';
import { getSliderImages, getIndexGoodsList } from '../../actions';
import http from '../../../../assets/utils/http';

class Index extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    // http.post('index/insertGoodsList');  // 模拟填入商品数据

    this.getSliderImages();
    this.getGoodsList();
  }

  getSliderImages = () => {
    const { getSliderImages } = this.props;
    getSliderImages();
  }

  getGoodsList = async () => {
    const { getGoodsList } = this.props;
    getGoodsList();
  }
  
  render() {
    const { slider, goodsList } = this.props;

    return (
      <div className="container">
        <TopBar />
        {
          slider && slider.imageList && slider.imageList.length>0 &&
          <Slider {...slider} />
        }
        {
          goodsList && goodsList.goodsList && goodsList.goodsList.list &&
          <Recommend goodsList={goodsList.goodsList.list} isEnd={!goodsList.goodsList.hasMore} />
        }
        <BottomBar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getSliderImages: () => {
    return dispatch(getSliderImages(null));  // 注意，即使不需要参数的action，仍然需要传个空，否则无法触发
  },
  getGoodsList: () => {
    return dispatch(getIndexGoodsList(null));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);