import React from 'react';
import './ThumbinialStyle.css';

function ThumbinialComponent(){
    return (
        <div className="ThumbinialStyle">
            <img className="image-style-thumbnail" src={"sample.jpg"} height="100" width="100"/>
            <h1>Normal-Image</h1>
        </div>
    );
}

export default ThumbinialComponent