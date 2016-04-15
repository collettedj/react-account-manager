import ClientRepo from '../../repos/account-manager/client';

export const ACTIONS = {
    // ADD_CLIENT:"ADD_CLIENT",
    SET_CLIENT_FIELDS:"SET_CLIENT_FIELDS",
    REQUEST_CREATE_CLIENT:"REQUEST_CREATE_CLIENT",
    CREATE_CLIENT_SUCCESS:"CREATE_CLIENT_SUCCESS",
    CREATE_CLIENT_FAILED:"CREATE_CLIENT_FAILED",
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

export const requestCreateClient = () => {
    return {
        type: ACTIONS.REQUEST_CREATE_CLIENT,
    };
};

export const createClientSuccess = client => {
    return {
        type: ACTIONS.CREATE_CLIENT_SUCCESS,
        client
    };
};

export const createClientFailed = err => {
    return {
        type: ACTIONS.CREATE_CLIENT_FAILED,
        message: JSON.stringify(err)
    };
};

export const createClient = client => {
    return dispatch => {
        dispatch(requestCreateClient());
        return ClientRepo.create(client)
            .then(result => {
                dispatch(createClientSuccess(result.client));
            })
            .catch(err => {
                dispatch(createClientFailed(err));
            });
    };
};

