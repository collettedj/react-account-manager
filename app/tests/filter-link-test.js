import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import TestUtils from 'react-addons-test-utils';
import FilterLink from '../components/filter-link';

describe("react tests", function(){
   
    it("filter link click", function(){
        const mockReducer = (state, action) => {
            return  {
                visibilityFilter: action.filter || "SHOW_ALL"
            };
        };

        const store = createStore(mockReducer);

        const filterLink = TestUtils.renderIntoDocument(
            <FilterLink 
                store={store} 
                filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        );

        let filterLinkNode = ReactDom.findDOMNode(filterLink);
        
        expect(store.getState().visibilityFilter).toBe("SHOW_ALL");
        expect(filterLinkNode.textContent).toEqual("Completed");
        expect(filterLinkNode.tagName).toEqual("A");

        TestUtils.Simulate.click(filterLinkNode);
        filterLinkNode = ReactDom.findDOMNode(filterLink);

        expect(store.getState().visibilityFilter).toBe("SHOW_COMPLETED");
        expect(filterLinkNode.tagName).toEqual("SPAN");
    });

});
