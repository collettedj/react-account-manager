import React from 'react';

const Register  = () => {
    return (
        <div>
            <h1 classname="text-info">registration</h1>
            <editregistration onsubmit={() => console.log("register user")}/>
        </div>
    );
};

export default Register;
