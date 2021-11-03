import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';
import App from './App';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

reducer = (state, action) => {
  switch(action.type) {

  }
}

ReactDOM.render(
  <Provider store = {store}>
      <App/>
  </Provider>,
  document.getElementById('root')
);
