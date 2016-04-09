import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import TodoApp from './todo-app';
import Home from './home';
import HomeIndex from './home-index';
import Subreddit from './subreddit';

import AccountManagerApp from './account-manager/account-manager-app';
import AccountManagerHome from './account-manager/home';
import AccountManagerLogin from './account-manager/login';
import AccountManagerRegister from './account-manager/register';
import AccountManagerUserProfile from './account-manager/user-profile';
import AccountManagerUserProfileIndex from './account-manager/user-profile-index';
import AccountManagerClient from './account-manager/client';


let AppRouter = ({
    store,
    history
}) => { 

    const requireAuth = (nextState, replace) => {
        const isAuthenticated = store.getState().accountManager.login.isAuthenticated;
        if(!isAuthenticated){
            replace({
                pathname:'/account-manager/login',
                state: { nextPathname: nextState.location.pathname}
            });
        }
    };

    return (
        <Router history={history}>
            <Route path="/" component={Home}>
                <IndexRoute component={HomeIndex}/>
                <Route path="/todo" component={TodoApp}/>
                <Route path="/subreddit" component={Subreddit}/>
            </Route>
            <Route path="/account-manager" component={AccountManagerApp}>
                <IndexRoute component={AccountManagerHome}/>
                <Route path="/account-manager/login" component={AccountManagerLogin}/>
                <Route path="/account-manager/register" component={AccountManagerRegister}/>
                <Route path="/account-manager/user-profile" component={AccountManagerUserProfile} onEnter={requireAuth}>
                    <IndexRoute component={AccountManagerUserProfileIndex}/>
                    <Route path="/account-manager/user-profile/client/:id" component={AccountManagerClient}/>
                </Route>
            </Route>
        </Router>
    );

};

export default AppRouter;

