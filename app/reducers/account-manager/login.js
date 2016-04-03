import {ACTIONS} from '../../actions/account-manager/login';

const login = (state={
    isLoggedIn: false,
}, action) => {
    switch(action.type){
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLoggedIn:true,
            };
        default:
            return state;
    }
};

export default login;
