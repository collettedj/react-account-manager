import React from 'react';
import NavBar from './nav-bar';

const AccountManagerApp = (props) => {
    return (
        <div>
            <NavBar/>
                {props.children}
        </div>
    );
};

export default AccountManagerApp;

