import '../style.scss';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'babel-polyfill';
import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import {hashHistory} from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DevTools from './dev-tools';
import rootReducer from '../reducers';
import AppRouter from '../components/router'; 
import {restore} from '../actions/account-manager/login';

import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
const routeMiddleware = routerMiddleware(hashHistory);
// const loggerMiddleware = createLogger();
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
            thunkMiddleware,
            routeMiddleware, 
            crashReporter),
        DevTools.instrument()
    )
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <div>
        <span className="fa fa-circle-o-notch fa-spin"></span> Loading.....
    </div>,
    document.getElementById('content')
);

store.dispatch(restore(window.location.href))
    .then(()=> {
        ReactDOM.render(
            <Provider store={store}>
                <div className="container">
                    <AppRouter history={history} store={store}/>
                    <DevTools />
                </div>
            </Provider>,
            document.getElementById('content')
        );
    });


