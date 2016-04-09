import React from 'react';
const Todo = ({
    onClick,
    completed,
    text
}) => {
    return <li  className={"list-group-item "  + (completed ? "list-group-item-success":"")}
        onClick={onClick}
        style={{
            textDecoration: completed ? "line-through": "none"
        }}
    >
        {text}
    </li>;   
};

export default Todo;
