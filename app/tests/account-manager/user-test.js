import {createStore} from 'redux';
import {
    ACTIONS, 
    setUserFields
} from '../../actions/account-manager/user';
import user from '../../reducers/account-manager/user';
import deepFreeze from 'deep-freeze';

describe("account manager user redux tests", function(){
    it("test set user fields", function(){
        const stateBefore = {
            firstname: "",
            lastname: "",
        };

        const action1 = setUserFields({firstname:"newfirstname"});
        const action2 = setUserFields({lastname:"newlastname"});

        deepFreeze(stateBefore);
        deepFreeze(action1);
        deepFreeze(action2);

        const stateAfter1 = {
            firstname: "newfirstname",
            lastname:"",
        }
        
        const stateAfter2 = {
            firstname: "",
            lastname:"newlastname",
        }
        

        expect(user(stateBefore,action1)).toEqual(stateAfter1);
        expect(user(stateBefore,action2)).toEqual(stateAfter2);
    });
});



