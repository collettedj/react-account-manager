import todo from './todo';
import {ACTIONS} from '../actions/todo';

const todos = (state=[], action) => {
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case ACTIONS.TOGGLE_TODO:
            return state.map(t => todo(t,action));
        default:
            return state;
    }
};

export default todos;
