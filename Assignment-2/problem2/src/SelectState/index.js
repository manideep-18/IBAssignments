import React from 'react';
import './styleState.css';

class SelectState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedState:'',
            textClassState:'message-none-selected'
        };
    }
    handleChange=(event)=>{
        this.setState({selectedState:event.target.value});
        this.setState({textClassState:'message-none-selected'});
        
    }
    
    handleSubmit=(event)=>{
        this.setState({textClassState:'message-display-selected'});
        event.preventDefault();
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <select value='SelectState'  onChange={this.handleChange}>
            <option value='Selecting States'>Select your State</option>
            {this.props.statesSelection.map((differentState)=>(
                <option value={differentState}>{differentState}</option>
            ))}
            </select>
            <input type="submit" value="Submit"/>
            <p className={this.state.textClassState}>your are from {this.state.selectedState}</p>
            </form>
            </div>
        );
    }
}

export default SelectState