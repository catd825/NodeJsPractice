import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

//create instance of a store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//to the provider, pass the store as a prop, and pass the app as a child
ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector('#root')
);