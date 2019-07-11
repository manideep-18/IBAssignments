import React from 'react';
import './CornerStyle.css';

function CornerComponent(){
    return (
        <div className="CornerStyle">
            <img className="ImageStyleCorner" src={"sample.jpg"} height="100" width="100"/>
            <h1>RoundCornerImage</h1>
        </div>
    );
}

export default CornerComponent