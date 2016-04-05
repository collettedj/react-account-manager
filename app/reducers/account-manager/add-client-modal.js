import {ACTIONS} from '../../actions/account-manager/add-client-modal';

const addClientModal = (state={
    isOpen:false,
    newClient:{
        name:"",
        description:"",
        identifier:"",
        secret:"",
    }
},action) => {
    switch(action.type){
        case ACTIONS.TOGGLE_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        case ACTIONS.SET_NEW_CLIENT_FIELDS:
            return {
                ...state,
                newClient:{
                    ...state.newClient,
                    ...action.newClient
                },
            };
        case ACTIONS.CLEAR_NEW_CLIENT_FIELDS:
            return {
                ...state,
                newClient:{
                    name:"",
                    description:"",
                    identifier:"",
                    secret:"",
                }
            };
        default:
            return state;
    }
};

export default addClientModal;

