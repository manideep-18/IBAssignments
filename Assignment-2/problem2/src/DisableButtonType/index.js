import React from 'react'

class DisableButtonType extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={activeStatus:false,submitStatus:false};
    }
    handleChange=(event)=>{
        console.log(this.state.activeStatus);
        if(!this.state.activeStatus)
        this.setState({activeStatus:true});
        else
        this.setState({activeStatus:false});
    }
    handleSubmit=(event)=>{
        console.log("jjmjyj");
        if(this.state.activeStatus){
        this.setState({submitStatus:true});
        }
        if(!this.state.activeStatus)
        alert('I am Working');
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <input type="checkbox" value="Disable" onClick={this.handleChange}/>  Disable
                <input type="submit" value="Click me"/>
                </div>
            </form>
        );
    }
}

export default DisableButtonType