import {combineReducers} from 'redux';
import user from './user';
import clientApp from './client-app';
import login from './login';

const accountManagerReducer = combineReducers({
    user,
    clientApp,
    login,
});

export default accountManagerReducer;
