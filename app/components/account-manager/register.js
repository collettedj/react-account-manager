import React from 'react';

const Register  = ({

}) => {
    return (
        <div>
            <h1 className="text-info">Registration</h1>

            <form >
                <div className="form-group reg-firstname">
                    <label className="control-label">First Name
                        <span className="err-msg"></span>
                    </label>
                    <input className="form-control"/>
                </div>
                <div className="form-group reg-lastname">
                    <label className="control-label">Last Name
                        <span className="err-msg"></span>
                    </label>
                    <input className="form-control"/>
                </div>
                <div className="form-group reg-username">
                     <label className="control-label">Username
                        <span className="err-msg"></span>
                    </label>
                    <input className="form-control"/>
                </div>
                <div className="form-group reg-password">
                    <label className="control-label">Password
                        <span className="err-msg"></span>
                    </label>
                    <input type="password" className="form-control"/>
                </div>
                <div className="form-group reg-password-conf" >
                    <label className="control-label">Password Confirmation
                        <span className="err-msg"></span>
                    </label>
                    <input type="password" className="form-control"/>
                </div>

                <hr/>
                <button className="registration-btn btn btn-success pull-right" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
