import {ACTIONS} from '../../actions/account-manager/client-form';
import {ACTIONS as DATA_ACTIONS} from '../../actions/account-manager/client-data';

const client = (state={
    isEditing:false,
    isRequesting: false,
    errorMessage: null,
}, action) => {
    switch(action.type){
        case ACTIONS.TOGGLE_CLIENT_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        case DATA_ACTIONS.REQUEST_SAVE_CLIENT:
            return {
                ...state,
                isRequesting:true,
                errorMessage:null,
            };
        case DATA_ACTIONS.SAVE_CLIENT_SUCCESS:
            return {
                ...state,
                isRequesting:false,
                errorMessage:null,
            };
        case DATA_ACTIONS.SAVE_CLIENT_FAILED:
            return {
                ...state,
                isRequesting:false,
                errorMessage:action.message,
            };
        default:
            return state;
    }
};

export default client;

