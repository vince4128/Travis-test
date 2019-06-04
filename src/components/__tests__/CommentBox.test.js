import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

// we should use the shallow render 
// (render *just* the given component and none of its children)
// but for learning reason we use the full DOM render (mount)
// (render the component and all of its children + let us modify it afterwards)

it('has a text area and a button', ()=>{
    const wrapped = mount(<CommentBox/>);

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});