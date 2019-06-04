import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App = () => {
    return (
        <React.Fragment>
            <h1>Travis test</h1>
            <CommentBox/>
            <CommentList/>
        </React.Fragment>
    )
}

export default App;