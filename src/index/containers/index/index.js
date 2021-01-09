import React, { Component } from 'react';
import TopBar from '../../components/top-bar';
import Slider from '../../components/slider';
import { connect } from 'react-redux';
import { getSliderImages } from '../../actions';

class Index extends Component {
  constructor() {
    super(...arguments);
  }

  componentWillMount() {
    this.getSliderImages();
  }

  getSliderImages = () => {
    const { getSliderImages } = this.props;

    getSliderImages();
  }
  
  render() {
    const { slider } = this.props;
    return (
      <div className="container">
        <TopBar />
        {
          slider && Object.keys(slider).length > 0 &&
          <Slider {...slider} />
        }
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);