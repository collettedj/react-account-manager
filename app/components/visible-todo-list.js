import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoList from './todo-list';
import {FILTERS} from '../actions/visibility-filter';
import {toggleTodo} from '../actions/todo';

const getVisibleTodos = (
    todos,
    filter
) => {
    let visibleTodos  = todos;
    switch(filter){
        case FILTERS.SHOW_ACTIVE:
            visibleTodos = todos.filter(t => !t.completed);
            break;
        case FILTERS.SHOW_COMPLETED:
            visibleTodos = todos.filter(t => t.completed);
            break;
    }  
    return visibleTodos;
};

const mapStateToProps = (state) => {
    return {
        todos:getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick:(todoId) => {
            dispatch(toggleTodo({id:todoId}));
        }
    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
