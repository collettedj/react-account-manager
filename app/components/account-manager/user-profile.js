import React from 'react';
import {connect} from 'react-redux';
import EditUser from './edit-user';
import ToggleButton from './toggle-button';
import {toggleUserEditing, saveUser} from '../../actions/account-manager/user';
import {setUserFields} from '../../actions/account-manager/login';

const UserProfileClass = ({
    user,
    loginUser,
    onUserChange,
    toggleEditing,
    children
}) => {
    return (
        <div>
            <h3 className="text-info">User</h3>
            <div>
                <div className="pull-right">
                    <ToggleButton
                        classNames="btn-xs"
                        on={user.isEditing}
                        onToggle={toggleEditing} >
                        Edit
                    </ToggleButton>
                </div>
                <div className="clearfix"></div>
            </div>

            <EditUser
                user={loginUser}
                isEditing={user.isEditing}
                onSubmit={onUserChange}>
                <hr/>
                <button type="submit" disabled={user.isRequesting || !user.isEditing} className={"btn btn-xs pull-right user-save-btn " + (user.isRequesting ? "btn-warning" : "btn-success")}>
                    <span className={"fa fa-circle-o-notch " + (user.isRequesting ? "fa-spin" : "") }></span> save
                </button>
                <div className="clearfix"/>
            </EditUser>
           
            <h3 className="text-info">Applications</h3>
            {children}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.accountManager.user,
        loginUser: state.accountManager.login.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserChange: (user) => {
            dispatch(setUserFields(user));
            dispatch(saveUser());
        },
        toggleEditing: () => {
            dispatch(toggleUserEditing());
        }
    };
    
};

const UserProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileClass);

export default UserProfile;
