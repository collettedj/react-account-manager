require('../style.scss');
import 'babel-polyfill'
import {compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import DevTools from './dev-tools';

import {fetchPostsIfNeeded} from '../actions/subreddit';

import rootReducer from '../reducers';
import AppRouter from '../components/router'; 

const loggerMiddleware = createLogger();
const crashReporter = store => next => action => {
    try{
        next(action);
    } catch(err) {
        console.error("Caught an error!", err);
        throw err;
    }
};

const store = createStore(rootReducer,
    compose(
        applyMiddleware(
            crashReporter,
            thunkMiddleware,
            loggerMiddleware),
        DevTools.instrument(),
    )
);

import Auth from '../utils/auth';
Auth.login("dcollette", "test1234")
    .catch(err => {
        console.log(err);
    });


ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <AppRouter />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('content')
);


