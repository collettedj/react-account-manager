import {ACTIONS} from '../actions/subreddit';

const selectSubreddit = (state='reactjs', action) => {
    switch(action.type){
        case ACTIONS.SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
};

export default selectSubreddit;
