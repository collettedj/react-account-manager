import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setUserFields} from '../../actions/account-manager/user';

const UserProfileClass = ({
    user,
    onUserChange,
    children
}) => {

    const handleFirstnameChange = (event) => {
        onUserChange({firstname: event.target.value});
    };
    
    const handleLastnameChange = (event) => {
        onUserChange({lastname: event.target.value});
    };

    return (
        <div>
            <h3 className="text-info">User</h3>
            <div>
                <div className="pull-right">
                    toggle
                    <button type="button" className="btn btn-xs btn-success pull-right user-save-btn">save</button>
                </div>
                <div className="clearfix"></div>
            </div>

            <div className="form-group user-first-name">
                <label className="control-label">First Name
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" value={user.firstname} onChange={handleFirstnameChange}/>
                <div className="form-control-static">{user.firstname}</div>
            </div>
            <div className="form-group user-last-name">
                <label className="control-label">Last Name
                    <span className="err-msg"></span>
                </label>
                <input className="form-control" value={user.lastname} onChange={handleLastnameChange}/>
                <div className="form-control-static">{user.lastname}</div>
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
        }
    };
    
};

const UserProfile = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfileClass);

export default UserProfile;
