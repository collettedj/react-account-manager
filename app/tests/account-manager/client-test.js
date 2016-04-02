import {createStore} from 'redux';
import {
    ACTIONS,
    addClient,
} from '../../actions/account-manager/client';
import clients from '../../reducers/account-manager/clients';
import deepFreeze from 'deep-freeze';

describe("account manager client redux tests", function(){
    it("test create client", function(){
        const stateBefore = [];

        const action = addClient({
            name:"name",
            description:"descripton",
            identifier:"identifier",
            secret:"secret",
        });

        deepFreeze(stateBefore);
        deepFreeze(action);

        const stateAfter = [{
            id:0,
            name:"name",
            description:"descripton",
            identifier:"identifier",
            secret:"secret",
        }];

        expect(clients(stateBefore,action)).toEqual(stateAfter);
    });
});


