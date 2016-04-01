import {ACTIONS} from '../../actions/account-manager/user';

const user = (state={
    firstname:"",
    lastname:"",
},action) => {
    switch(action.type){
        case ACTIONS.SET_USER_FIELDS:
            return {
                ...state,
                ...action.user,
            };
        default:
            return state;
    }
};

export default user;

