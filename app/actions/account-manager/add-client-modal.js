export const ACTIONS = {
    TOGGLE_OPEN:"TOGGLE_OPEN",
    SET_NEW_CLIENT_FIELDS:"SET_NEW_CLIENT_FIELDS",
    CLEAR_NEW_CLIENT_FIELDS:"CLEAR_NEW_CLIENT_FIELDS",
};

export const toggleOpen = () => {
    return {
        type: ACTIONS.TOGGLE_OPEN
    };
};

export const setNewClientFields = (newClient) => {
    return {
        type: ACTIONS.SET_NEW_CLIENT_FIELDS,
        newClient
    };
};

export const clearNewClientFields = (newClient) => {
    return {
        type: ACTIONS.CLEAR_NEW_CLIENT_FIELDS,
    };
};

