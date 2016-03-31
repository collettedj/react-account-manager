import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import TestUtils from 'react-addons-test-utils';
import AddTodo from '../components/add-todo';

describe("react tests", function(){
   
    it("filter link click", function(){
        const mocks = {
            reducer: (state, action) => {
                return { todos:[] };
            }
        };
        spyOn(mocks, "reducer");

        const store = createStore(mocks.reducer);

        const addTodo = TestUtils.renderIntoDocument(
            <AddTodo
                store={store}> 
            </AddTodo>
        );
        var buttonNode =  TestUtils.findRenderedDOMComponentWithTag(addTodo, "button");
        var inputNode =  TestUtils.findRenderedDOMComponentWithTag(addTodo, "input");
        inputNode.value= "my new todo";

        TestUtils.Simulate.change(inputNode);
        TestUtils.Simulate.click(buttonNode);
        expect(mocks.reducer).toHaveBeenCalledWith(undefined, {
            type:"ADD_TODO",
            id:0,
            text:'my new todo',
            completed: false
        });

    });

});
