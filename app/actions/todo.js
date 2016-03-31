export const ACTIONS = {
    ADD_TODO:"ADD_TODO",
    TOGGLE_TODO:"TOGGLE_TODO"
};

let nextTodoId=0;
export const addTodo = ({text, completed=false}) => ({
    type: ACTIONS.ADD_TODO,
    id:nextTodoId++,
    text,
    completed
});

export const toggleTodo = ({id}) => ({
    type: ACTIONS.TOGGLE_TODO,
    id
});
