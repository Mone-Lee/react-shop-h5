import React from 'react';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

import App from './containers/index';
import rootReducer from './reducers';

export function createApp () {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  )
  
  return { app, store }
}