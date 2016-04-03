import React from 'react';
import {reduxForm} from 'redux-form';

let EditRegistration = ({
    isEditing,
    fields: {firstname, lastname, username, password, passwordConf},
    children,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group user-first-name">
                <label className="control-label">First Name
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" {...firstname}/>
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Last Name
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" {...lastname}/>
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Username
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" {...username}/>
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Password
                    <span className="err-msg"></span>
                </label>
                <input type="password" className="form-control" {...password}/>
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Confirm Password
                    <span className="err-msg"></span>
                </label>
                <input type="password" className="form-control" {...passwordConf}/>
            </div>
            <hr/>
            <button className="registration-btn btn btn-success pull-right" type="submit">Register</button>
        </form>
    );
};

EditRegistration = reduxForm({
    form: 'Registration',
    fields: ['firstname', 'lastname'],
})(EditRegistration);

export default EditRegistration;
