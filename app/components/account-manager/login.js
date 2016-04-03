import React from 'react';
import {reduxForm} from 'redux-form';

let LoginForm= ({
    fields: {username, password},
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group login-username">
                <label className="control-label">username
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" placeholder="enter username" {...username}/>
            </div>

            <div className="form-group login-password">
                <label className="control-label">password
                    <span className="err-msg"></span>
                </label>
                <input type="password" className="form-control" placeholder="enter password" {...password}/>
            </div>

            <hr/>
            <button className="btn btn-success pull-right login-btn" type="submit">login</button>
        </form>
    );
};

LoginForm = reduxForm({
    form:'login',
    fields:['username', 'password'],
})(LoginForm);

export default LoginForm;
