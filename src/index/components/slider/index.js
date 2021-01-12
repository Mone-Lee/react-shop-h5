import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

class Slider extends Component {
  render() {
    const { imageList } = this.props;

    return (
      <div className="slider-wrap">
        <Carousel
          autoplay={true}
          infinite
        >
          {imageList.map(image => (
            <img
              src={image}
              key={image}
              style={{ width: '100%', verticalAlign: 'top' }}
            />
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Slider;