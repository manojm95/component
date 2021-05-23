import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className = "ui comments Container"> 
            <div className = "comment" >
                <a href ="/" className ="avatar" >
                    <img alt = "nive" />
        
                </a>
                <div className ="content" >
                    <a href= "/" className ="author"> Nive </a>
                    <div className = "metadata" >
                        <span className="date">Today at 3pm</span>
                    </div> 
                    <div className ="text" >lovely video</div>


            
                </div>





            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));