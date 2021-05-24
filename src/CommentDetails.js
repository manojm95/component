import React from 'react';
import faker from 'faker';

const CommentDetails = (props) => {
return (
    <div className = "comment" >
    <a href ="/" className ="avatar" >
        <img alt = "nive" src = {faker.image.avatar()}/>

    </a>
    <div className ="content" >
        <a href= "/" className ="author"> {props.author} </a>
        <div className = "metadata" >
            <span className="date">Today at 3pm</span>
        </div> 
        <div className ="text" >lovely video</div>



    </div>





</div>
);
};

export default CommentDetails;