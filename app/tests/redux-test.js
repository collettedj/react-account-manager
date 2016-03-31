import { createStore } from 'redux';
import todos from '../reducers/todos';
import {addTodo, toggleTodo} from '../actions/todo';
import {setVisibilityFilter, FILTERS} from '../actions/visibility-filter';
import visibilityFilter from '../reducers/visibility-filter';
import todoApp from '../reducers/todo-app';
import  deepFreeze from 'deep-freeze';

describe("redux tests", function() {
    let store = null;
    beforeEach(function(){
        store = createStore(todos);
    })    
    it('test add todo', function() { 
        const stateBefore=[];
        const action = addTodo({id:0, text:"Learn Redux"});
        const stateAfter = [{
            id:0,
            text:"Learn Redux",
            completed:false,
        }];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(todos(stateBefore,action)).toEqual(stateAfter);

    });

    it('test toggle todo', function() {
        const stateBefore = [{
            id:0,
            text: 'Learn Redux',
            completed: false,
        },{
            id:1,
            text: 'Go shopping',
            completed: false,
        }];

        const action = toggleTodo({id:1});

        deepFreeze(stateBefore);
        deepFreeze(action);
        
        const stateAfter = [{
            id:0,
            text: 'Learn Redux',
            completed: false,
        },{
            id:1,
            text: 'Go shopping',
            completed: true,
        }];

        expect(todos(stateBefore,action)).toEqual(stateAfter);
    })

    it('unkown action', function(){
        const action = {
            type: "UNKOWN_ACTION",
        };
        deepFreeze(action);
        expect(todos(undefined,action)).toEqual([]);
    })


    it('set visibility filter', function(){
        const action = setVisibilityFilter({filter:FILTERS.SHOW_COMPLETED});
        deepFreeze(action);

        expect(visibilityFilter(undefined,action)).toEqual(FILTERS.SHOW_COMPLETED);
    })

    it('todo-app reducer', function(){
        const action = setVisibilityFilter({filter:FILTERS.SHOW_COMPLETED});
        deepFreeze(action);
        expect(todoApp(undefined,action).visibilityFilter).toEqual(FILTERS.SHOW_COMPLETED);
    })
});

