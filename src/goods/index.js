import React from 'react';
import { hydrate, render } from 'react-dom';
import 'babel-polyfill';
import axios from 'axios';
import { Provider } from 'react-redux';
import '../../assets/styles/normalize.css';
import '../../assets/styles/global.less';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

import App from './containers/goods';
import rootReducer from './reducers';

let defaultStore = {};
let cacheKey = window.cachekey;
if (cacheKey) {
  axios.get(`/data-cache/${cacheKey}`).then( result => {
    if(result) {
      defaultStore = result.data;
      const store = createStore(rootReducer, defaultStore, applyMiddleware(thunkMiddleware, loggerMiddleware));

      hydrate(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      )
    }
  }, (err) => {
  })
} else {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}