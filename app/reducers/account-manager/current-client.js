import {ACTIONS} from '../../actions/account-manager/client';

const currentClientId = (state=-1, action) => {
    switch(action.type){
        case ACTIONS.SET_CURRENT_CLIENT:
            return action.id;
        default:
            return state;
    }
};

export default currentClientId;
