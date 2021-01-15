import React from 'react';
import { render } from 'react-dom';
import '../../assets/styles/normalize.css';
import '../../assets/styles/global.less';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

import App from './container/goods';
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)