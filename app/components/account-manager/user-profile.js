import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditUser from './edit-user';
import ToggleButton from './toggle-button';
import {toggleUserEditing, saveUser, getUser, setUserFields} from '../../actions/account-manager/user';

class UserProfileClass extends Component{
    constructor(props, context){
        super(props, context);
    }

    componentDidMount(){
        const {getUser} = this.props;
        getUser();
    }

    render(){

        const {
            user,
            loginUser,
            onUserChange,
            toggleEditing,
            children
        } = this.props;

        if(user.isRequesting){
            return <div>
                <span className="fa fa-circle-o-notch fa-spin"></span>
            </div>;
        } else {
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
                        <button type="submit" 
                            disabled={user.isRequesting || !user.isEditing} 
                            className={"btn btn-xs pull-right user-save-btn " + (user.isRequesting ? "btn-warning" : "btn-success")}>
                            <span className={"fa fa-circle-o-notch " + (user.isRequesting ? "fa-spin" : "") }></span> save
                        </button>
                        <div className="clearfix"/>
                    </EditUser>
                   
                    <h3 className="text-info">Applications</h3>
                    {children}
                </div>
            );
        }
    }

}

const mapStateToProps = state => {
    return {
        user: state.accountManager.user,
        loginUser: state.accountManager.data.user
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
        },
        getUser:() => {
            dispatch(getUser());
        }
    };
};

const UserProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileClass);

export default UserProfile;
