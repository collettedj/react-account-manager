export const ACTIONS = {
    REQUEST_LOGIN:"REQUEST_LOGIN",
    LOGIN_FAILED:"LOGIN_FAILED",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    REQUEST_LOGOUT:"REQUEST_LOGOUT",
    LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
};

export const login = ({
    username, 
    password,
}) => {
    return {
        type: ACTIONS.REQUEST_LOGIN,
        username,
        password,
    };
};
