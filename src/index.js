import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // In order to use Bootstrap

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/modules/index';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'; // Redux Middleware 'Redux Thunk' (In order to use async (axios))

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
<Provider store={store}>
    <App />    
</Provider>, document.getElementById('root'));