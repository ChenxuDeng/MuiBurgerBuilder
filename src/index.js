import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,combineReducers,compose} from "redux";
import burgerBuilder from "./store/reducer/burgerBuilder";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import order from "./store/reducer/order";
import auth from "./store/reducer/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    burgerBuilder:burgerBuilder,
    order:order,
    auth:auth
})

const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
))

const app=<Provider store={store}>
    <App />
</Provider>

ReactDOM.render(app,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
