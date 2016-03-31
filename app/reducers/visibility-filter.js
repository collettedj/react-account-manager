import {ACTIONS,FILTERS} from '../actions/visibility-filter.js';

const visibilityFilter = (
    state=FILTERS.SHOW_ALL,
    action
) => {
    switch(action.type){
        case ACTIONS.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
export default visibilityFilter;

