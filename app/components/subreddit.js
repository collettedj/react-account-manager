import {connect} from 'react-redux';
import SubredditButtons from './subreddit-buttons';
import {fetchPostsIfNeeded, invalidateSubreddit} from '../actions/subreddit';

const mapStateToProps = (
    state
) => {
    const {selectSubreddit, postsBySubreddit} = state;
    const subredditObj = postsBySubreddit[selectSubreddit];
    let items = subredditObj ? subredditObj.items : [];
    return {
        items
    };
};

const mapDispatchToProps = (
    dispatch
) => {
    return {
        clickFetch: () => {
            console.log("fetch");
            dispatch(fetchPostsIfNeeded("reactjs"));
        },

        clickInvalidate: () => {
            console.log("invalidate");
            dispatch(invalidateSubreddit("reactjs"));
        }
    }
};

const Subreddit = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditButtons);

export default Subreddit;


