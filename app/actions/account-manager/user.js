import UserRepo from '../../repos/account-manager/user';

export const ACTIONS = {
    TOGGLE_USER_EDITING: "TOGGLE_USER_EDITING",
    REQUEST_SAVE_USER:"REQUEST_SAVE_USER",
    SAVE_USER_SUCCESS:"SAVE_USER_SUCCESS",
    SAVE_USER_FAILED:"SAVE_USER_FAILED",
    REQUSET_GET_USER:"REQUEST_GET_USER",
    GET_USER_SUCCESS:"GET_USER_SUCCESS",
    GET_USER_FAILED:"GET_USER_FAILED",
    SET_USER_FIELDS: "SET_USER_FIELDS",
};

export const setUserFields = (user) => {
    return {
        type:ACTIONS.SET_USER_FIELDS,
        user
    };
};

export const toggleUserEditing  = () => {
    return {
        type: ACTIONS.TOGGLE_USER_EDITING
    };
};

const requestSaveUser = () => {
    return {
        type: ACTIONS.REQUEST_SAVE_USER,
    };
};

const saveUserSuccess = (user) => {
    return {
        type: ACTIONS.SAVE_USER_SUCCESS,
        user
    };
};

const saveUserFailed = err => {
    return {
        type: ACTIONS.SAVE_USER_FAILED,
        message: JSON.stringify(err)
    };
};

export const saveUser = () => {
    return (dispatch,getState) => {
        const user = getState().accountManager.data.user;
        dispatch(requestSaveUser());
         return UserRepo.save(user)
            .then(result => {
                dispatch(saveUserSuccess(result.user));
            })
            .catch(err => {
                dispatch(saveUserFailed(err));
            });
    };
};

const requestGetUser = () => {
    return {
        type: ACTIONS.REQUSET_GET_USER,
    };
};

const getUserSuccess = (user, clients) => {
    return {
        type: ACTIONS.GET_USER_SUCCESS,
        user,
        clients
    };
};

const getUserFailed = (err) => {
    return {
        type: ACTIONS.GET_USER_FAILED,
        message: JSON.stringify(err)
    };
};

export const getUser = () => {
    return (dispatch,getState) => {
        const user = getState().accountManager.login.user;
        dispatch(requestGetUser());
        return UserRepo.getUser(user._id)
            .then(result => {
                dispatch(getUserSuccess(result.user, result.clients));
            })
            .catch(err => {
                dispatch(getUserFailed(err));
            });
    };
};

