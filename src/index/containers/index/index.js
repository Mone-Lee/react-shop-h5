import React, { Component } from 'react';
import TopBar from '../../components/top-bar';
import Slider from '../../components/slider';
import Recommend from '../../components/recommend';
import BottomBar from '../../components/bottom-bar';
import { connect } from 'react-redux';
import { getSliderImages, getIndexGoodsList, getSliderImagesSuccess, getIndexGoodsListSuccess } from '../../actions';
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
    const { getSliderImages, getSliderImagesSuccess, slider } = this.props;
    if (slider && slider.imageList) {
      getSliderImagesSuccess(slider);
    } else {
      getSliderImages();
    }
  }

  getGoodsList = async () => {
    const { getGoodsList, getGoodsListSuccess, goodsList } = this.props;
    if (goodsList && goodsList.goodsList) {
      getGoodsListSuccess(goodsList);
    } else {
      getGoodsList();
    }
  }

  handleClick = () => {
    console.log('handleClick')
  }
  
  render() {
    const { slider, goodsList } = this.props;
    const imageList = slider && slider.imageList ? slider && slider.imageList : []
    const list = goodsList && goodsList.goodsList ? goodsList.goodsList.list : [];
    const isEnd = goodsList && goodsList.goodsList ? !goodsList.goodsList.hasMore : true;

    return (
      <div className="container">
        <TopBar />
        <Slider imageList={imageList} />
        {/* <div onClick={this.handleClick}>测试</div> */}
        <Recommend goodsList={list} isEnd={isEnd} />
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
  getSliderImagesSuccess: (data) => {
    return dispatch(getSliderImagesSuccess(data))
  },
  getGoodsList: () => {
    return dispatch(getIndexGoodsList(null));
  },
  getGoodsListSuccess: (data) => {
    return dispatch(getIndexGoodsListSuccess(data))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);