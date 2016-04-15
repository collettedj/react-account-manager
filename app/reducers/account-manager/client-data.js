import {ACTIONS} from '../../actions/account-manager/client-data';

const clientData = (state={
    _id: null,
    name: null,
    description:null,
    clientIdentifier:null,
    secret:null
},action) => {
    switch(action.type){
        // case ACTIONS.ADD_CLIENT:
        //     return {
        //         name: action.name,
        //         description: action.description,
        //         clientIdentifier: action.clientIdentifier,
        //         secret: action.secret,
        //     };
        case ACTIONS.SAVE_CLIENT_SUCCESS:
        case ACTIONS.SET_CLIENT_FIELDS:
            if(state._id === action._id){
                return {
                    ...state,
                    ...action.client,
                };
            }
            return state;
        default:
            return state;
    }
};

export default clientData;
