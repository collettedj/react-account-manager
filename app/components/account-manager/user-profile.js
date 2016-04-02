import React, {Component} from 'react';
import {connect} from 'react-redux';
import ToggleButton from './toggle-button';
import {setUserFields, toggleUserEditing} from '../../actions/account-manager/user';

const UserProfileClass = ({
    user,
    onUserChange,
    toggleEditing,
    children
}) => {

    const handleFirstnameChange = (event) => {
        onUserChange({firstname: event.target.value});
    };
    
    const handleLastnameChange = (event) => {
        onUserChange({lastname: event.target.value});
    };

    const firstname = user.isEditing ?
        <input className="form-control" value={user.firstname} onChange={handleFirstnameChange}/>:
        <div className="form-control-static">{user.firstname}</div>;

    const lastname= user.isEditing ?
        <input className="form-control" value={user.lastname} onChange={handleLastnameChange}/>:
        <div className="form-control-static">{user.lastname}</div>;

    return (
        <div>
            <h3 className="text-info">User</h3>
            <div>
                <div className="pull-right">
                    <ToggleButton
                        classNames="btn-xs"
                        on={user.isEditing}
                        onToggle={toggleEditing}
                    >
                        Edit
                    </ToggleButton>
                    <button type="button" className="btn btn-xs btn-success pull-right user-save-btn">save</button>
                </div>
                <div className="clearfix"></div>
            </div>

            <div className="form-group user-first-name">
                <label className="control-label">First Name
                    <span className="err-msg"></span>
                </label>
                {firstname}
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Last Name
                    <span className="err-msg"></span>
                </label>
                {lastname}
            </div>

            <hr/>
            <h3 className="text-info">Applications</h3>
            {children}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.accountManager.user,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onUserChange: (user) => {
            dispatch(setUserFields(user));
        },
        toggleEditing: () => {
            dispatch(toggleUserEditing());
        }
    };
    
};

const UserProfile = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfileClass);

export default UserProfile;
