import {ACTIONS} from '../actions/subreddit';
import posts from './subreddit-posts';

const postsBySubreddit = (state={}, action) => {
    switch(action.type){
        case ACTIONS.INVALIDATE_SUBREDDIT:
        case ACTIONS.REQUEST_POSTS:
        case ACTIONS.RECIEVE_POSTS:
            return {
                ...state,
                [action.subreddit]:posts(state[action.subreddit],action),
            };
        default:
            return state;
    }
};

export default postsBySubreddit;
