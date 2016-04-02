export const ACTIONS = {
    SET_USER_FIELDS: "SET_USER_FIELDS",
    TOGGLE_USER_EDITING: "TOGGLE_USER_EDITING",
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

