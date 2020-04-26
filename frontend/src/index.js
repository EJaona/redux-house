import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';

import { rootReducer } from './components/reducers/rootReducer';

const root = document.querySelector('#root')
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);
