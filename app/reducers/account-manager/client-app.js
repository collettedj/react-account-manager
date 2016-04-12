import {combineReducers} from 'redux';
import client from './client';
import addClientModal from './add-client-modal';
import currentClientId from './current-client';

const clientApp = combineReducers({
    client,
    addClientModal,
    currentClientId,
});

export default clientApp;
