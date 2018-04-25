import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
