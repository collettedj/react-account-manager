import {combineReducers} from 'redux';
import user from './user';
import clientApp from './client-app';
import login from './login';
import {routerReducer} from 'react-router-redux';

const accountManagerReducer = combineReducers({
    user,
    clientApp,
    login,
    routing: routerReducer,
});

export default accountManagerReducer;
