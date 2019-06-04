import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import { exportAllDeclaration } from '@babel/types';

it('shows a comment box', ()=>{
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});