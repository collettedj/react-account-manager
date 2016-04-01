export const ACTIONS = {
    SET_USER_FIELDS: "SET_USER_FIELDS",
};

export const setUserFields = (user) => {
    return {
        type:ACTIONS.SET_USER_FIELDS,
        user
    };
};

