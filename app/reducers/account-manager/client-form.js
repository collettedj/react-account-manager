import {ACTIONS} from '../../actions/account-manager/client-form';

const client = (state={
    isEditing:false
}, action) => {
    switch(action.type){
        // case ACTIONS.ADD_CLIENT:
        //     return {
        //         id: action.id,
        //         name: action.name,
        //         description: action.description,
        //         identifier: action.identifier,
        //         secret: action.secret,
        //     };
        case ACTIONS.TOGGLE_CLIENT_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        // case ACTIONS.SET_CLIENT_FIELDS:
        //     if(state.id === action.id){
        //         return {
        //             ...state,
        //             ...action.client,
        //         };
        //     }
        //     return state;
        default:
            return state;
    }
};

export default client;

