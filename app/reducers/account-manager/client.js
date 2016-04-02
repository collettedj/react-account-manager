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
            if(state.id === action.id){
                return {
                    ...state,
                    isEditing: !state.isEditing,
                };
            }
            return state;
        case ACTIONS.SET_CLIENT_FIELDS:
            return {
                ...state,
                ...action.client,
            };
        default:
            return state;
    };
};

export default client;

