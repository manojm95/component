import React from 'react';
//import faker from 'faker';

const CommentDetails = (props) => {
return (
    <div className = "comment" >
    <a href ="/" className ="avatar" >
        <img alt = "nive" src = {props.srcimg}/>

    </a>
    <div className ="content" >
        <a href= "/" className ="author"> {props.author} </a>
        <div className = "metadata" >
            <span className="date">{props.Timeago}</span>
        </div> 
        <div className ="text" >{props.commentDisp}</div>

    </div>





</div>
);
};

export default CommentDetails;