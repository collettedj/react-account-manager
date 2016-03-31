import {ACTIONS} from '../actions/todo';

const todo = (state={}, action) => {
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return {
                    id: action.id,
                    text: action.text,
                    completed: false,
                };
        case ACTIONS.TOGGLE_TODO:
            if(state.id === action.id){
                return {
                    ...state,
                    completed: !state.completed,
                };
            }
            return state;
        default:
            return state;
    }
};

export default todo ;

