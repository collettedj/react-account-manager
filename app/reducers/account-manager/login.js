import {ACTIONS} from '../../actions/account-manager/login';

const login = (state={
    isRequesting: false,
    isAuthenticated: false,
    user:null,
    errorMessage:null,
}, action) => {
    switch(action.type){
        case ACTIONS.REQUEST_LOGIN:
            if(!state.isAuthenticated){
                return {
                    ...state,
                    isRequesting:true,
                    user:null,
                    errorMessage:null,
                };
            } else {
                return state;
            }
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
        case ACTIONS.REQUEST_LOGOUT:
            if(state.isAuthenticated){
                return {
                    ...state,
                    isRequesting:true,
                    errorMessage:null
                };
            } else {
                return state;
            }
        case ACTIONS.LOGOUT_SUCCESS:
            return {
                ...state,
                isRequesting:false,
                isAuthenticated:false,
                user:null,
                errorMessage:null,
            };
        case ACTIONS.LOGOUT_FAILED:
            return {
                ...state,
                isRequesting:false,
                errorMessage: action.message,
            };
        case ACTIONS.REQUEST_RESTORE:
            if(!state.isAuthenticated){
                return {
                    ...state,
                    isRequesting:true,
                    errorMessage:null
                };
            } else {
                return state;
            }
        case ACTIONS.RESTORE_SUCCESS:
            return {
                ...state,
                isRequesting:false,
                isAuthenticated: action.user !== null,
                errorMessage:null,
                user: action.user,
            };
        case ACTIONS.RESTORE_FAILED:
            return {
                ...state,
                isRequesting:false,
                errorMessage: null 
            };
        default:
            return state;
    }
};

export default login;
