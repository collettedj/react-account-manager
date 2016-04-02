export const ACTIONS = {
    ADD_CLIENT: "ADD_CLIENT",
    TOGGLE_CLIENT_EDITING: "TOGGLE_CLIENT_EDITING",
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

export const toggleClientEditing = () => {
    return {
        type: ACTIONS.TOGGLE_CLIENT_EDITING,
    };
};

