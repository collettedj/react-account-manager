import {combineReducers} from 'redux';
import user from './user';

const accountManagerReducer = combineReducers({
    user
});

export default accountManagerReducer;
