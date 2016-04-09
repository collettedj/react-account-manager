import React from 'react';
import {reduxForm} from 'redux-form';

let EditUser = ({
    isEditing,
    fields: {firstname, lastname},
    children,
    handleSubmit,
}) => {
    const firstnameControl = isEditing ?
        <input className="form-control" {...firstname}/>:
        <div className="form-control-static">{firstname.value}</div>;

    const lastnameControl= isEditing ?
        <input className="form-control" {...lastname}/>:
        <div className="form-control-static">{lastname.value}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group user-first-name">
                <label className="control-label">First Name
                    <span className="err-msg"></span>
                </label>
                {firstnameControl}
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Last Name
                    <span className="err-msg"></span>
                </label>
                {lastnameControl}
            </div>
            {children}
        </form>
    );
};

EditUser = reduxForm({
    form: 'User',
    fields: ['firstname', 'lastname'],
}, state => {
    return {
        initialValues: state.accountManager.login.user
    };
})(EditUser);

export default EditUser;
