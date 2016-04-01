import {createStore} from 'redux';
import {
    ACTIONS,
    toggleOpen,
} from '../../actions/account-manager/add-client-modal';

import addClientModal from '../../reducers/account-manager/add-client-modal';
import deepFreeze from 'deep-freeze';

describe("account manager add client modal redux tests", function(){
    it("test toggle modal open ", function(){
        const stateBefore = {
            isOpen: false
        };

        const action = toggleOpen();

        deepFreeze(stateBefore);
        deepFreeze(action);

        const stateAfter = {
            isOpen:true
        };

        expect(addClientModal(stateBefore,action)).toEqual(stateAfter);
    });
});


