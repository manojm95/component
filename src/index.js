import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';

const App = () => {
    return (
        <div className = "ui comments Container"> 
         <CommentDetail author = 'nivi'/>
         <CommentDetail author='mano'/>
         <CommentDetail author='aarav'/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));