import {ACTIONS} from '../../actions/account-manager/user';

const user = (state={
    isEditing:false,
    isRequesting:false,
    errorMessage:null,
},action) => {
    switch(action.type){
        case ACTIONS.TOGGLE_USER_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        case ACTIONS.REQUEST_SAVE_USER:
            return {
                ...state,
                isRequesting:true
            };
        case ACTIONS.SAVE_USER_SUCCESS:
            return {
                ...state,
                isRequesting:false,
                isEditing:false,
                errorMessage:null
            };
        case ACTIONS.SAVE_USER_FAILED:
            return {
                ...state,
                isRequesting:false,
                errorMessage:action.message
            };
        default:
            return state;
    }
};

export default user;

