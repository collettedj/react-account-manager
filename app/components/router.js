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
import {connect} from 'react-redux';

let router = null;

let AppRouter = ({
    isAuthenticated,
    history
}) => { 

    const requireAuth = (nextState, replace) => {
        if(!isAuthenticated){
            replace({
                pathname:'/account-manager/login',
                state: { nextPathname: nextState.location.pathname}
            });
        }
    };

    if(!router){
        router = <Router history={history}>
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
        </Router>;
    }

    return router;
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.accountManager.login.isAuthenticated,
    };
};

AppRouter = connect(
    mapStateToProps
)(AppRouter);

export default AppRouter;

