import React from 'react';
import EditRegistration from './edit-registration';

const Register  = ({

}) => {
    return (
        <div>
            <h1 className="text-info">Registration</h1>
            <EditRegistration onSubmit={() => console.log("register user")}/>
        </div>
    );
};

export default Register;
