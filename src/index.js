import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';

const App = () => {
    return (
        <div className = "ui comments Container"> 
         <CommentDetail 
         author = 'nivi' 
         Timeago = 'yesterday at 6.00PM' 
         commentDisp ='great cooking' 
         srcimg={faker.image.avatar()}/>
         <CommentDetail 
         author='mano' 
         Timeago = 'yesterday at 6.00PM' 
         commentDisp ='love the video' 
         srcimg={faker.image.avatar()}/>
         <CommentDetail 
         author='aarav' 
         Timeago = 'today at 6.00PM'
         commentDisp = 'wow' 
         srcimg='faker.image.avatar()'/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));