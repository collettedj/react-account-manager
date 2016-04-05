import {ACTIONS} from '../../actions/account-manager/login';

const login = (state={
    isAuthenticated: false,
}, action) => {
    switch(action.type){
        case ACTIONS.REQUEST_LOGIN:
            return {
                ...state,
                isAuthenticated:true,
            };
        default:
            return state;
    }
};

export default login;
