export const ACTIONS = {
    ADD_CLIENT: "ADD_CLIENT",
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
