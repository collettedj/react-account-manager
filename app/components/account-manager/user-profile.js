import React from 'react';
import {connect} from 'react-redux';
import EditUser from './edit-user';
import ToggleButton from './toggle-button';
import {toggleUserEditing} from '../../actions/account-manager/user';
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
                <button type="submit" className="btn btn-xs btn-success pull-right user-save-btn">save</button>
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
    mapDispatchToProps
)(UserProfileClass);

export default UserProfile;
