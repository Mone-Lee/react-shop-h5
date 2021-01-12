import React, { Component } from 'react';
import './index.less';

class BottomBar extends Component {
  render() {
    return (
      <div className="bottom-bar">
        <ul className="bottom-bar-nav">
          <li className="nav-item nav-item-home" />
          <li className="nav-item nav-item-cat" />
          <li className="nav-item nav-item-car" />
          <li className="nav-item nav-item-personal" />
        </ul>
      </div>
    )
  }
}

export default BottomBar;