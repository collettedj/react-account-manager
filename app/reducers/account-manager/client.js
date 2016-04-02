import {ACTIONS} from '../../actions/account-manager/client';

const client = (state={
}, action) => {
    switch(action.type){
        case ACTIONS.ADD_CLIENT:
            return {
                id: action.id,
                name: action.name,
                description: action.description,
                identifier: action.identifier,
                secret: action.secret,
                isEditing: false,
            };
        case ACTIONS.TOGGLE_CLIENT_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        default:
            return state;
    };
};

export default client;

