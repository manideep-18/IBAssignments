import React from 'react';

import './App.css';
import Images from './Images/Images';
import StrikeOff from './StrikeOff';
import DifferentMessages from './DifferentMessages';
import GreetingText from './GreetingText';
import FavouriteDesert from './FavouriteDesert'
import CitiesVisited from './CitiesVisited'
import SelectState from './SelectState'
import DisableButtonType from './DisableButtonType'
import StopWatch from './StopWatch'
import CommentBox from './CommentBox'

class App extends React.Component {
  render(){
    return (
      <div> 
        <StrikeOff/>
        <Images/>
        <DifferentMessages/>
        <GreetingText/>
        <FavouriteDesert deserts={['Vanilla', 'Butter-scotch', 'Chocolate','Strawberry']}/>
        <CitiesVisited cities={['hyderabad','Mumbai','Chennai']}/>
        <SelectState statesSelection={['Telangana','Andhra Pradesh','Kerala','Karnataka']}/>
        <DisableButtonType/>
        <StopWatch />
        <CommentBox/>
    </div>
    );
  }
  
    
}

export default App;
