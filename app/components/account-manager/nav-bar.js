import React from 'react';
import NavLink from '../nav-link';

const NavBar = () => {
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
                    <ul className="nav navbar-nav navbar-right">
                    { /*{{#if session.isAuthenticated}}
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="glyphicon glyphicon-user"></span> Welcome {{session.data.authenticated.firstname}}
                                <b className="caret"></b>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#" {{ action 'invalidateSession' }}>Sign Off</a></li>
                            </ul>
                        </li>
                    {{else}}
                    */ }
                    <li>
                        <NavLink to="/account-manager/register"><span className="glyphicon glyphicon-send"></span> Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/account-manager/login"><span className="glyphicon glyphicon-user"></span> Login</NavLink>
                    </li>
                    {/*{{/if}}*/}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
