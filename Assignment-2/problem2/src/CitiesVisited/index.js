import React from 'react'
import './styleVisited.css'
import { thisExpression } from '@babel/types';

class CitiesVisited extends React.Component{

    constructor(props){
        super(props);
        this.state={
            activeArray:[],activeCheckBox:'',textClass:'message-none-visited'
        };
    }
    handleChange=(event)=>{
        this.setState({activeArray:this.state.activeArray.concat(event.target.value)});
        console.log("handle Change");
        let arr=this.state.activeArray;
        for(var i=0;i<this.state.activeArray.length;i++)
        {
            if(this.state.activeArray[i] == event.target.value){
                arr.splice(i,1);

                this.setState({activeArray:arr});
                i--;

        }
    }
    this.setState({textClass:'message-none-visited'});
  }

    displayCheckBoxes=()=>{
        let displayBox=[];
        for(var i=0;i<this.props.cities.length;i++){
            const box=( <li>
                <label>.
                <input type="checkbox"  value={this.props.cities[i]}  onChange={this.handleChange}/>
                {this.props.cities[i]}  
                </label>
                </li>)
        displayBox.push(box);
        }
        return displayBox
    }
    handleSubmit=(event)=>{
        this.setState({textClass:'message-display-visited'});
        event.preventDefault();
    }
    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
            <h1>What is Favourite Icecream</h1>
            <div>
            {this.displayCheckBoxes()}
            </div>
            <input type="submit" value="Submit"/>
            <p className={this.state.textClass}>your Visited Cities is {this.state.activeArray.toString()}</p>
            </form>
        

        );
    }
}
export default CitiesVisited