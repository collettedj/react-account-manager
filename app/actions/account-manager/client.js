export const ACTIONS = {
    ADD_CLIENT: "ADD_CLIENT",
};

export const addClient = ({
    name,
    description,
    identifier,
    secret,
}) => {
    return {
        type: ACTIONS.ADD_CLIENT,
        name,
        description,
        identifier,
        secret,
    };
};
