import {combineReducers} from 'redux';
import clients from './clients';
import addClientModal from './add-client-modal';
import currentClientId from './current-client';

const clientApp = combineReducers({
    clients,
    addClientModal,
    currentClientId,
});

export default clientApp;
