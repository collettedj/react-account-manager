import {ACTIONS} from '../../actions/account-manager/user';

const user = (state={
    firstname:"",
    lastname:"",
    isEditing:false,
},action) => {
    switch(action.type){
        case ACTIONS.SET_USER_FIELDS:
            return {
                ...state,
                ...action.user,
            };
        case ACTIONS.TOGGLE_USER_EDITING:
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        default:
            return state;
    }
};

export default user;

