import Auth from '../../utils/auth';

export const ACTIONS = {
    REQUEST_LOGIN:"REQUEST_LOGIN",
    LOGIN_FAILED:"LOGIN_FAILED",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    REQUEST_LOGOUT:"REQUEST_LOGOUT",
    LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
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

export const login = ({
    username, 
    password,
}) => {
    return dispatch => {
        dispatch(requestLogin(username,password));
        return Auth.login(username, password)
            .then(user => {
                dispatch(loginSuccess(user));
            })
            .catch(err => {
                dispatch(loginFailed(err.responseText));
            });
    };
};
