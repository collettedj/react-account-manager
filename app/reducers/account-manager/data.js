import {ACTIONS as USER_ACTIONS} from '../../actions/account-manager/user';
import {ACTIONS as CLIENT_ACTIONS} from '../../actions/account-manager/client';

import client from './client';

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
        // case CLIENT_ACTIONS.TOGGLE_CLIENT_EDITING:
        //     return {
        //         ...state,
        //         clients: state.clients.map( c => client(c,action))
        //     };
        case CLIENT_ACTIONS.SET_CLIENT_FIELDS:
            return {
                ...state,
                clients: state.clients.map( c => client(c,action))
            };
        default:
            return state;
    }
};

export default data;
