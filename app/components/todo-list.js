import React from 'react';
import Todo from './todo';

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul className="list-group">
        {todos.map(todo => {
            return <Todo key={todo.id} {...todo}
                onClick={() => onTodoClick(todo.id)}>
            </Todo>;
        })}
    </ul>
);

export default TodoList;
