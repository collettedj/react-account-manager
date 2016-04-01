import {ACTIONS} from '../../actions/account-manager/client';
import client from './client';

const clients = (state=[], action) => {
    switch(action.type){
        case ACTIONS.ADD_CLIENT:
            return [
                ...state,
                client(undefined,action)
            ];
        default:
            return state;
    };
};

export default clients;

