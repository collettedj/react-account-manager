import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Link from '../components/link';

describe("react tests", function(){
    it("active link is as span", function(){
        const spy = jasmine.createSpy();
        const divLink = TestUtils.renderIntoDocument(
            <div>
                <Link active={true} onClick={spy}>Text Link</Link>
            </div>
        );

        const divLinkNode = ReactDom.findDOMNode(divLink);
        const linkNode = divLinkNode.children[0]; 
        expect(linkNode.textContent).toEqual("Text Link");
        expect(linkNode.tagName).toEqual("SPAN");

        expect(spy.calls.count()).toEqual(0);

        TestUtils.Simulate.click(linkNode);
        expect(spy.calls.count()).toEqual(0);
    });
    
    it("inactive link is as a", function(){
        const spy = jasmine.createSpy();
        const divLink = TestUtils.renderIntoDocument(
            <div>
                <Link active={false} onClick={spy}>Text Link</Link>
            </div>
        );

        const divLinkNode = ReactDom.findDOMNode(divLink);
        const linkNode = divLinkNode.children[0]; 
        expect(linkNode.textContent).toEqual("Text Link");
        expect(linkNode.tagName).toEqual("A");

        expect(spy.calls.count()).toEqual(0);

        TestUtils.Simulate.click(linkNode);
        expect(spy.calls.count()).toEqual(1);
    });

});
