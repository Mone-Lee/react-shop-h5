import React, { Component } from 'react';

class GoodsImages extends Component {
  render() {
    const { imageList } = this.props;

    return (
      <div className="goods-images">
        {
          imageList && imageList.length > 0 &&
          imageList.map(image => (
            <img key={image} style={{width: '100%'}} src={image} />
          ))
        }
      </div>
    )
  }
}

export default GoodsImages;