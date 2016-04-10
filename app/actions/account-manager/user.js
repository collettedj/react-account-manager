import UserRepo from '../../repos/account-manager/user';

export const ACTIONS = {
    TOGGLE_USER_EDITING: "TOGGLE_USER_EDITING",
    REQUEST_SAVE_USER:"REQUEST_SAVE_USER",
    SAVE_USER_SUCCESS:"SAVE_USER_SUCCESS",
    SAVE_USER_FAILED:"SAVE_USER_FAILED",
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
        const user = getState().accountManager.login.user;
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

