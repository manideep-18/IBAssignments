import React from 'react'
import './styleFavourite.css'

class FavouriteDesert extends React.Component{
    constructor(props){
        super(props);
        this.state={
            radioButton1:'',textClass:'message-none'
        };
    }
    handleClickChange=(event)=>{
        this.setState({radioButton1:event.target.value});
        this.setState({textClass:'message-none'});
    }

    handleSubmit=(event)=>{
        this.setState({textClass:'message-display'});
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h1>What is Favourite Icecream</h1>
            <div>
            {this.props.deserts.map((desert)=>(
                <label>
                <input type="radio" name="Desert" value={desert} onClick={this.handleClickChange}/>
                {desert}
                </label>
            ))
            }
            </div>
            <input type="submit" value="Submit"/>
            <p className={this.state.textClass}>your favourite desert is {this.state.radioButton1}</p>
            </form>
        

        );
    }
}
export default FavouriteDesert