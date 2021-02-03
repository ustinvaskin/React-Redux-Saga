import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'
import {forbiddenWordsMiddlewear} from './redux/middlewear'
import {compose, createStore, applyMiddleware} from 'redux'
import { rootReducer } from './redux/rootReducer';
// Wrapper we are adding extra functionality, it accepts object store as a parameter, 
// so now our components can see store and use redux functionality
import {Provider} from 'react-redux'
// create store with dev tools using compose becuse we can add middleweare
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, forbiddenWordsMiddlewear),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
