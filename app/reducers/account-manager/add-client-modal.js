import {ACTIONS} from '../../actions/account-manager/add-client-modal';

const addClientModal = (state={
    isOpen:false
},action) => {
    switch(action.type){
        case ACTIONS.TOGGLE_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        default:
            return state;
    };
};

export default addClientModal;

