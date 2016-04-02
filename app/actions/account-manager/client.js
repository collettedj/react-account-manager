export const ACTIONS = {
    ADD_CLIENT: "ADD_CLIENT",
    SET_CLIENT_FIELDS: "SET_CLIENT_FIELDS",
    TOGGLE_CLIENT_EDITING: "TOGGLE_CLIENT_EDITING",
    SET_CURRENT_CLIENT:"SET_CURRENT_CLIENT",
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

export const toggleClientEditing = (id) => {
    return {
        type: ACTIONS.TOGGLE_CLIENT_EDITING,
        id
    };
};

export const setClientFields = (id, client) => {
    return {
        type: ACTIONS.SET_CLIENT_FIELDS,
        id,
        client,
    };
};

export const setCurrentClient = id => {
    return {
        type: ACTIONS.SET_CURRENT_CLIENT,
        id,
    };
};

