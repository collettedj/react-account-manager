import {ACTIONS} from '../../actions/account-manager/login';

const login = (state={
    isRequesting: false,
    isAuthenticated: false,
    user:null,
    errorMessage:null,
}, action) => {
    switch(action.type){
        case ACTIONS.REQUEST_LOGIN:
            return {
                ...state,
                isRequesting:true,
                user:null,
                errorMessage:null,
            };
        case ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                isRequesting:false,
                isAuthenticated:true,
                user: action.user,
                errorMessage: null
            };
        case ACTIONS.LOGIN_FAILED:
            return {
                ...state,
                isRequesting:false,
                isAuthenticated:false,
                user:null,
                errorMessage: action.message,
            };
        default:
            return state;
    }
};

export default login;
