import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import './Styles/index.css';

import App from './App.js';

import reportWebVitals from './reportWebVitals';

import graphsReducer from './Reducers/graphsReducer.js'
import controllerReducer from './Reducers/controllerReducer.js'
import shipReducer from './Reducers/shipReducer'
import interfaceReducer from './Reducers/interfaceReducer.js'
import AsteroidReducer from './Reducers/asteroidReducer.js'




const rootReducer = combineReducers({
  graphs: graphsReducer,
  controller: controllerReducer,
  ship: shipReducer,
  interface: interfaceReducer,
  asteroid: AsteroidReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
