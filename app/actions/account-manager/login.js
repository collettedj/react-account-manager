import Auth from '../../utils/auth';
import {push} from 'react-router-redux';

export const ACTIONS = {
    REQUEST_LOGIN:"REQUEST_LOGIN",
    LOGIN_FAILED:"LOGIN_FAILED",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    REQUEST_LOGOUT:"REQUEST_LOGOUT",
    LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
    LOGOUT_FAILED:"LOGOUT_FAILED",
};

export const requestLogin = (username, password) => ({
    type: ACTIONS.REQUEST_LOGIN,
    username,
    password
});

export const loginSuccess = (user) => ({
    type: ACTIONS.LOGIN_SUCCESS,
    user
});

export const loginFailed = (message) => ({
    type: ACTIONS.LOGIN_FAILED,
    message
});

export const login = (
    username, 
    password,
    nextPath
) => {
    return dispatch => {
        dispatch(requestLogin(username,password));
        return Auth.login(username, password)
            .then(user => {
                dispatch(loginSuccess(user));
            })
            .then(() => {
                dispatch(push(nextPath));
            })
            .catch(err => {
                dispatch(loginFailed(err.responseText));
            });
    };
};

const requestLogout = () => {
    return {
        type: ACTIONS.REQUEST_LOGOUT,
    };
};

const logoutSuccess = () => {
    return {
        type: ACTIONS.LOGOUT_SUCCESS,
    };
};

const logoutFailed = (message) => {
    return {
        type: ACTIONS.LOGOUT_FAILED,
        message
    };
};

export const logout =() => {
    return dispatch => {
        dispatch(requestLogout());
        return Auth.logout()
            .then(() => {
                dispatch(logoutSuccess());
                dispatch(push('/account-manager'))
            })
            .catch(err => {
                dispatch(logoutFailed(err));
            });
    };
};

