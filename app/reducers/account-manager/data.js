import {ACTIONS as USER_ACTIONS} from '../../actions/account-manager/user';

const data = (state={
    user:null,
    clients:[]
}, action) => {
    switch(action.type){
        case USER_ACTIONS.SAVE_USER_SUCCESS:
            return {
                ...state,
                user:action.user
            };
        case USER_ACTIONS.SET_USER_FIELDS:
            return {
                ...state,
                user:{
                    ...state.user,
                    ...action.user,
                }
            };
        case USER_ACTIONS.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                clients: action.clients
            };
        
        default:
            return state;
    }
};

export default data;
