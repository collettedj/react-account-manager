import React from 'react';
import NavLink from '../nav-link';
import {connect} from 'react-redux';

let Home =({
    isAuthenticated
}) => {
    const linkControl = isAuthenticated ?
        <NavLink to="/account-manager/user-profile" className="btn btn-default">Go to user profile</NavLink>:
        <NavLink to="/account-manager/login" className="btn btn-default">Login</NavLink>;

    return (
        <div className="jumbotron">
            <h2>Account Manager <small>Oauth 2.0 provider with OpenId Connect</small></h2>
            <p>Use this application to register client applications to be used with Oauth 2.0</p>
            {linkControl}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.accountManager.login.isAuthenticated
    };
};

Home = connect(
    mapStateToProps,
    null
)(Home);

export default Home;
