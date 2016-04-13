export const ACTIONS = {
    TOGGLE_CLIENT_EDITING: "TOGGLE_CLIENT_EDITING",
    SET_CURRENT_CLIENT:"SET_CURRENT_CLIENT",
};

export const toggleClientEditing = (id) => {
    return {
        type: ACTIONS.TOGGLE_CLIENT_EDITING,
        id
    };
};

export const setCurrentClient = id => {
    return {
        type: ACTIONS.SET_CURRENT_CLIENT,
        id,
    };
};

