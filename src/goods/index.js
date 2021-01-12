import React from 'react';
import { render } from 'react-dom';
import '../../assets/styles/normalize.css';
import '../../assets/styles/global.less';

import App from './container/goods';
 
render(
  <App />,
  document.getElementById('root')
)