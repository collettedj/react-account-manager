import {combineReducers} from 'redux';
import user from './user';
import clients from './clients';

const accountManagerReducer = combineReducers({
    user,
    clients
});

export default accountManagerReducer;
