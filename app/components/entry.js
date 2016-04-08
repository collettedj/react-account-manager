import '../style.scss';
import 'babel-polyfill'
import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DevTools from './dev-tools';
import rootReducer from '../reducers';
import AppRouter from '../components/router'; 

const loggerMiddleware = createLogger();
const crashReporter = () => next => action => {
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
        DevTools.instrument()
    )
);

const history = syncHistoryWithStore(hashHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <AppRouter history={history} />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('content')
);


