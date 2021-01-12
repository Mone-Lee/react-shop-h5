import React, { Component } from 'react';
import './index.less';
// import '../../../../assets/icon/iconfont.css';

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="logo">
          <img src={ require('./images/logo.jpg').default } />
          <p>极客时间商城</p>
        </div>
        <div className="search">
          <span className="iconfont iconfangdajing search-icon"></span>
          <p>我的记录</p>
        </div>
      </div>
    )
  }
}

export default TopBar;