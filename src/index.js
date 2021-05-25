import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui comments Container"> 
        <ApprovalCard >
         <CommentDetail 
         author = 'nivi' 
         Timeago = 'yesterday at 6.00PM' 
         commentDisp ='great cooking' 
         srcimg={faker.image.avatar()}/>
         </ApprovalCard>
         <ApprovalCard >
         <CommentDetail 
         author='mano' 
         Timeago = 'yesterday at 6.00PM' 
         commentDisp ='love the video' 
         srcimg={faker.image.avatar()}/>
         </ApprovalCard>

         <ApprovalCard>
         <CommentDetail 
         author='aarav' 
         Timeago = 'today at 6.00PM'
         commentDisp = 'wow' 
         srcimg='faker.image.avatar()'/>
         </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));