import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '../../assets/styles/normalize.css';
import '../../assets/styles/global.less';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();

import App from './containers/register';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

