export const ACTIONS = {
    LOGIN:"LOGIN",
};

export const login = ({
    username, 
    password,
}) => {
    return {
        type: ACTIONS.LOGIN,
        username,
        password,
    };
};
