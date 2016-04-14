import ClientRepo from '../../repos/account-manager/client';

export const ACTIONS = {
    // ADD_CLIENT:"ADD_CLIENT",
    SET_CLIENT_FIELDS:"SET_CLIENT_FIELDS",
    REQUEST_SAVE_CLIENT:"REQUEST_SAVE_CLIENT",
    SAVE_CLIENT_SUCCESS:"SAVE_CLIENT_SUCCESS",
    SAVE_CLIENT_FAILED:"SAVE_CLIENT_FAILED",
};

// export const addClient = ({
//     name,
//     description,
//     clientIdentifier,
//     secret,
// }) => {
//     return {
//         type: ACTIONS.ADD_CLIENT,
//         name,
//         description,
//         clientIdentifier,
//         secret,
//     };
// };

export const setClientFields = (_id, client) => {
    return {
        type: ACTIONS.SET_CLIENT_FIELDS,
        _id,
        client,
    };
};

export const requestSaveClient = () => {
    return {
        type: ACTIONS.REQUEST_SAVE_CLIENT,
    };
};

export const saveClientSuccess = client => {
    return {
        type: ACTIONS.SAVE_CLIENT_SUCCESS,
        client
    };
};

export const saveClientFailed = err => {
    return {
        type: ACTIONS.SAVE_CLIENT_FAILED,
        message: JSON.stringify(err)
    };
};

export const saveClient = client => {
    return dispatch => {
        dispatch(requestSaveClient());
        return ClientRepo.create(client)
            .then(result => {
                dispatch(saveClientSuccess(result.client));
            })
            .catch(err => {
                dispatch(saveClientFailed(err));
            });
    };
};

