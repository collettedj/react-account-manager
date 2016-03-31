import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../actions/todo';

let AddTodo = ({dispatch}) => {
    let input;
    return <div className="input-group">
        <input ref={node => input=node} className="form-control"/>
        <span className="input-group-btn">
            <button className="add-todo-button btn btn-success" onClick={() => {
                dispatch(addTodo({text:input.value}));
                input.value='';
            }}>
            Add Todo
            </button>
        </span>
        
    </div>
};

AddTodo = connect()(AddTodo)

export default AddTodo;
