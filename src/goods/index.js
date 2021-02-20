import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import '../../assets/styles/normalize.css';
import '../../assets/styles/global.less';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

import App from './containers/goods';
import rootReducer from './reducers';

const defaultStore = window.__initial_data;
const store = createStore(rootReducer, defaultStore, applyMiddleware(thunkMiddleware, loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

