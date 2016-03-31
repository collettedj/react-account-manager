import {combineReducers} from 'redux';
import postsBySubreddit from './subreddit-posts';
import selectSubreddit from './select-subreddit';
import todoApp from '../todo-app';

const subredditRootReducer = combineReducers({
    postsBySubreddit,
    selectSubreddit,
    todoApp
});

export default subredditRootReducer;
