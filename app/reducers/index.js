import {combineReducers} from 'redux';
import postsBySubreddit from './subreddit-posts-by-subreddit';
import selectSubreddit from './select-subreddit';
import todoApp from './todo-app';
import accountManager from './account-manager/account-manager-app';

const mainReducer = combineReducers({
    postsBySubreddit,
    selectSubreddit,
    todoApp,
    accountManager,
});

export default mainReducer;
