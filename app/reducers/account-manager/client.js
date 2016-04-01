import {ACTIONS} from '../../actions/account-manager/client';

const client = (state={
}, action) => {
    switch(action.type){
        case ACTIONS.ADD_CLIENT:
            return {
                name: action.name,
                description: action.description,
                identifier: action.identifier,
                secret: action.secret,
            };
        default:
            return state;
    };
};

export default client;

