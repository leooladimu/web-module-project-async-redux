
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { reducer } from './reducers';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store} >
      <App />
    </Provider>
    , rootElement
);

