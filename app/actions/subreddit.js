import fetch from 'isomorphic-fetch';

export const ACTIONS = {
    SELECT_SUBREDDIT: "SELECT_SUBREDDIT",
    INVALIDATE_SUBREDDIT: "INVALIDATE_SUBREDDIT",
    REQUEST_POSTS: "REQUEST_POSTS",
    RECIEVE_POSTS: "RECIEVE_POSTS",
};

export const selectSubreddit = subreddit => ( {
    type: ACTIONS.SELECT_SUBREDDIT,
    subreddit
} );

export const invalidateSubreddit = subreddit => ({
    type: ACTIONS.INVALIDATE_SUBREDDIT,
    subreddit
});

export const requestPosts = subreddit => ({
    type: ACTIONS.REQUEST_POSTS,
    subreddit
});

export const recievePosts = (subreddit, json) => {
    return {
        type: ACTIONS.RECIEVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        recievedAt: Date.now(),
    };
};

const fetchPosts = (subreddit) => {
    return dispatch => {
        dispatch(requestPosts(subreddit));
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(recievePosts(subreddit, json)));
    };
};

const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    if(!posts){
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
};

export const fetchPostsIfNeeded = subreddit => {
    return (dispatch,getState) => {
        if(shouldFetchPosts(getState(), subreddit)){
            return dispatch(fetchPosts(subreddit));
        } else {
            return Promise.resolve();
        }    
    };
};

