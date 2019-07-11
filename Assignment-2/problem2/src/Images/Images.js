import React from 'react'
import './image-style.css'
import ThumbinialComponent from './ThumbinialHeader';
import CircleComponent from './CircleComponentHeader';
import CornerComponent from './cornerheader';

class Images extends React.Component{
    render(){
        return (
          <div className="image-style">
            <div> 
        <ThumbinialComponent/>
        <CircleComponent/>
        <CornerComponent/>
        </div>
        </div>
        );
      }
}

export default Images