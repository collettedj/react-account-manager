import fetch from 'isomorphic-fetch';
import {createStore} from 'redux';
import {
    ACTIONS, 
    selectSubreddit as setSelectSubreddit,
    invalidateSubreddit as createInvalidateSubreddit,
    requestPosts as createRequestPosts,
    recievePosts as createRecievePosts,
} from '../actions/subreddit';

import selectSubreddit from '../reducers/select-subreddit';
import posts from '../reducers/subreddit-posts';
import postsBySubreddit from '../reducers/subreddit-posts-by-subreddit';

import deepFreeze from 'deep-freeze';

describe("subreddit redux tests", function(){
    it('test select subreddit', function(){
        const stateBefore = {
            state: 'mysubreddit'
        };
        const action = setSelectSubreddit('nextsubreddit');

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(selectSubreddit(stateBefore.state, action)).toEqual('nextsubreddit');
    });
        
    describe("invalidate posts", function(){
        const stateBefore = {
            nextsubreddit: {
                isFetching: false,
                didInvalidate: false,
                items:[],
            }
        };

        const action = createInvalidateSubreddit('nextsubreddit');

        const stateAfter = {
            nextsubreddit: {
                isFetching:false,
                didInvalidate:true,
                items:[],
            }
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        it('test subreddit posts invalidate subreddit', function(){
            expect(posts(stateBefore.nextsubreddit,action)).toEqual(stateAfter.nextsubreddit);
        });
        
        it('test subreddit posts invalidate subreddit by subreddit', function(){
            expect(postsBySubreddit(stateBefore,action)).toEqual(stateAfter);
        });

    });

    describe("request posts", function(){
        const stateBefore = {
                nextsubreddit:{
                isFetching: false,
                didInvalidate: false,
                items:[],
            }
        };

        const action = createRequestPosts('nextsubreddit');

        const stateAfter = {
            nextsubreddit:{
                isFetching:true,
                didInvalidate:false,
                items:[],
            }
        };

        deepFreeze(stateBefore);
        deepFreeze(action);
        
        it('test subreddit posts request posts', function(){
            expect(posts(stateBefore.nextsubreddit,action)).toEqual(stateAfter.nextsubreddit);
        });

        it('test subreddit posts request posts by subreddit', function(){
            expect(postsBySubreddit(stateBefore,action)).toEqual(stateAfter);
        });
    });

    describe("receive posts", function(){
        const stateBefore = {
            nextsubreddit:{
                isFetching: false,
                didInvalidate: false,
                items:[],
                lastUpdated:1
            }
        };

        let action = createRecievePosts('nextsubreddit',{
            data: {
                children: [{
                    data:"testinfo"
                }]
            }
        });

        action = {
            ...action,
            recievedAt:1
        };

        const stateAfter = {
            nextsubreddit:{
                isFetching:false,
                didInvalidate:false,
                items:[ "testinfo" ],
                lastUpdated:1,
            }
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        it('test subreddit posts recieve posts', function(){
            expect(posts(stateBefore.nextsubreddit,action)).toEqual(stateAfter.nextsubreddit);
        });

        it('test subreddit posts recieve posts by subreddit', function(){
            expect(postsBySubreddit(stateBefore,action)).toEqual(stateAfter);
        });

    });
    
});
