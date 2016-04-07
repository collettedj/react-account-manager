import React from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login as loginAction} from '../../actions/account-manager/login';

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
            <div className="clearfix"></div> 
        </form>
    );
};

LoginForm = reduxForm({
    form:'login',
    fields:['username', 'password'],
})(LoginForm);

let Login = ({
    login,
    errorMessage
}) => {
    let errorDiv = <div></div>;
    if(errorMessage){
        errorDiv = <div className="alert alert-danger">
            {errorMessage}
        </div>;
    }
    
    return (
        <div>
            <LoginForm onSubmit={login}/>
            {errorDiv}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        errorMessage:state.accountManager.login.errorMessage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(loginAction(username, password)),
    };
};

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default Login;
