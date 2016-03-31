import React from 'react';
import NavLink from '../nav-link';

const Home =({

}) => {
    return (
        <div className="jumbotron">
            <h2>Account Manager <small>Oauth 2.0 provider with OpenId Connect</small></h2>
            <p>Use this application to register client applications to be used with Oauth 2.0</p>
            <NavLink to="/account-manager/login" className="btn btn-default">Login</NavLink>
            <NavLink to="/account-manager/user-profile" className="btn btn-default">Go to user profile</NavLink>
            {/*{{#if session.isAuthenticated}}
                {{#link-to "user" tagName="button" className="btn btn-default" }}Go to user profile{{/link-to}}
            {{else}}
                {{#link-to "login" tagName="button" className="btn btn-default" }}Login{{/link-to}}
            {{/if}}*/}
        </div>
    );
};

export default Home;
