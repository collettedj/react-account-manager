import {combineReducers} from 'redux';
import user from './user';
import clientApp from './client-app';
import login from './login';
import data from './data';

const accountManagerReducer = combineReducers({
    user,
    clientApp,
    login,
    data
});

export default accountManagerReducer;
