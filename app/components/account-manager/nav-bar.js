import React from 'react';
import NavLink from '../nav-link';
import {connect} from 'react-redux';

let NavBar = ({
    isAuthenticated,
    user
}) => {
    let navList = null;
    if(isAuthenticated){
        navList = <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
                <a href="#/account-manager/login" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="glyphicon glyphicon-user"></span> Welcome {user.firstname} 
                    <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#" >Sign Off</a></li>
                </ul>
            </li>
        </ul>;
    } else {
        navList = <ul className="nav navbar-nav navbar-right">
            <li>
                <NavLink to="/account-manager/register"><span className="glyphicon glyphicon-send"></span> Register</NavLink>
            </li>
            <li>
                <NavLink to="/account-manager/login"><span className="glyphicon glyphicon-user"></span> Login</NavLink>
            </li>
        </ul>;
    }
    
    return (
        <nav className="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
            <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <NavLink to="/account-manager" className="navbar-brand">Account Manager</NavLink>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    {navList}
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.accountManager.login.isAuthenticated,
        user: state.accountManager.login.user
    };
};

NavBar = connect(
    mapStateToProps
)(NavBar);

export default NavBar;
