import {ACTIONS} from '../actions/subreddit';

const posts = (state={
    isFetching: false,
    didInvalidate: false,
    items: [],
}, action) => {
    switch(action.type){
        case ACTIONS.INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate:true
            };
        case ACTIONS.REQUEST_POSTS:
            return {
                ...state,
                isFetching:true,
                didInvalidate:false,
            };
        case ACTIONS.RECIEVE_POSTS:
            return {
                ...state,
                isFetching:false,
                didInvalidate:false,
                items: action.posts,
                lastUpdated: action.recievedAt,
            };
        default:
            return state;
    }
};

export default posts;
