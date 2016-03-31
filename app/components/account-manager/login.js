import React from 'react';

const Login = ({

}) => {
    return (
        <div>
            <form >

                <div className="form-group login-username">
                    <label className="control-label">Username
                        <span className="err-msg"></span>
                    </label>
                    <input className="form-control" placeholder="Enter Username"/>
                </div>

                <div className="form-group login-password">
                    <label className="control-label">Password
                        <span className="err-msg"></span>
                    </label>
                    <input type="password" className="form-control" placeholder="Enter Password"/>
                </div>

                <hr/>
                <button className="btn btn-success pull-right login-btn" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
