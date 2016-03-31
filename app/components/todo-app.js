import React, { Component } from 'react';
import AddTodo from './add-todo';
import Footer from './footer';
import VisibleTodoList from './visible-todo-list.js'

const TodoApp = ({
    store,
}) => {
    return (
        <div >
            <AddTodo />
            <br/>
            <VisibleTodoList />
            <Footer />
        </div>
    )
}

export default TodoApp;
