import {combineReducers} from 'redux';
import clients from './clients';
import addClientModal from './add-client-modal';

const clientApp = combineReducers({
    clients,
    addClientModal,
});

export default clientApp;
