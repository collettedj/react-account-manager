import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import postsBySubreddit from './subreddit-posts-by-subreddit';
import selectSubreddit from './select-subreddit';
import todoApp from './todo-app';
import accountManager from './account-manager/account-manager-app';
import {routerReducer} from 'react-router-redux';

const mainReducer = combineReducers({
    postsBySubreddit,
    selectSubreddit,
    todoApp,
    accountManager,
    form,
    routing: routerReducer,
});

export default mainReducer;
