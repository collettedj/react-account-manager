export const ACTIONS = {
    SET_VISIBILITY_FILTER:"SET_VISIBILITY_FILTER"
};

export const FILTERS = {
    SHOW_ALL:"SHOW_ALL",
    SHOW_ACTIVE:"SHOW_ACTIVE",
    SHOW_COMPLETED:"SHOW_COMPLETED"
};

export const setVisibilityFilter = ({
    filter
}) => ({
    type: ACTIONS.SET_VISIBILITY_FILTER,
    filter
});

