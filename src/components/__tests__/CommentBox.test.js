import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

// we should use the shallow render 
// (render *just* the given component and none of its children)
// but for learning reason we use the full DOM render (mount)
// (render the component and all of its children + let us modify it afterwards)

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(()=>{
    wrapped.unmount();
});

it('has a text area and a button', ()=>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    });

    //force the component to re-render in order to test if it had received text value
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});