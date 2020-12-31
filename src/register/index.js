import React from 'react';
import { render } from 'react-dom';
import App from './containers/register';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
)

