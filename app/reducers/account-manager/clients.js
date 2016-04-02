import {ACTIONS} from '../../actions/account-manager/client';
import client from './client';

const clients = (state=[], action) => {
    switch(action.type){
        case ACTIONS.ADD_CLIENT:
            return [
                ...state,
                client(undefined,action)
            ];
        case ACTIONS.TOGGLE_CLIENT_EDITING:
            return state.map(c => client(c, action));
        case ACTIONS.SET_CLIENT_FIELDS:
            return state.map(c => client(c, action));
        default:
            return state;
    };
};

export default clients;

