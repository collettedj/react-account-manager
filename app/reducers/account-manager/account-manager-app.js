import {combineReducers} from 'redux';
import user from './user';
import clientApp from './client-app';

const accountManagerReducer = combineReducers({
    user,
    clientApp,
});

export default accountManagerReducer;
