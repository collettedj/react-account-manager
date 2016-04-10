import Auth from '../../utils/auth';
import {push} from 'react-router-redux';

export const ACTIONS = {
    REQUEST_LOGIN:"REQUEST_LOGIN",
    LOGIN_FAILED:"LOGIN_FAILED",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    REQUEST_LOGOUT:"REQUEST_LOGOUT",
    LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
    LOGOUT_FAILED:"LOGOUT_FAILED",
    SET_USER_FIELDS: "SET_USER_FIELDS",
    REQUEST_RESTORE:"REQUEST_RESTORE",
    RESTORE_SUCCESS:"RESTORE_SUCCESS",
    RESTORE_FAILED:"RESTORE_FAILED"
};

export const setUserFields = (user) => {
    return {
        type:ACTIONS.SET_USER_FIELDS,
        user
    };
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
                dispatch(push('/account-manager'));
            })
            .catch(err => {
                dispatch(logoutFailed(err));
            });
    };
};

const requestRestore = () => {
    return {
        type: ACTIONS.REQUEST_RESTORE
    };  
};

const restoreSuccess = (user) => {
    return {
        type: ACTIONS.RESTORE_SUCCESS,
        user
    };
};

const restoreFailed = (message) => {
    return {
        type: ACTIONS.RESTORE_FAILED,
        message
    };
};

export const restore = (currentUrl) => {
    return (dispatch, getState) => {
        dispatch(requestRestore());
        return Auth.restore()
            .then(user => {
                dispatch(restoreSuccess(user));
                const state = getState();
                if(state.accountManager.login.isAuthenticated){
                    const strMatch = currentUrl.match(/#(.*)[?].*$/);
                    const nextPath = strMatch[1];
                    dispatch(push(nextPath));
                }
            })
            .catch(err => {
                dispatch(restoreFailed(err));
            });
    };
};

