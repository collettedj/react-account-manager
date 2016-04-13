export const ACTIONS = {
    ADD_CLIENT:"ADD_CLIENT",
    SET_CLIENT_FIELDS:"SET_CLIENT_FIELDS",
};

let clientId = 0;
export const addClient = ({
    name,
    description,
    identifier,
    secret,
}) => {
    return {
        type: ACTIONS.ADD_CLIENT,
        id:clientId++,
        name,
        description,
        identifier,
        secret,
    };
};

export const setClientFields = (_id, client) => {
    return {
        type: ACTIONS.SET_CLIENT_FIELDS,
        _id,
        client,
    };
};

