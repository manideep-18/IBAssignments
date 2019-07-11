import React from 'react'
import './style.css'

class GreetingText extends React.Component{
    constructor(props){
        super(props);
        this.state={text:'',textClass:'message-display-none',focus:false,message:'name a-z A-Z'};
        

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this._onBlur=this._onBlur.bind(this);
        this._onFocus=this._onFocus.bind(this);
    }
    _onBlur() {
        console.log('blur');
        setTimeout(() => {
            if (this.state.focus) {
                this.setState({
                    focus: false,
                });
                
            }
        }, 0);
    }
    _onFocus(){
        console.log('focus');
        setTimeout(() => {
            if(!this.state.focus){
                this.setState({
                    focus: true,
                });
               
            }
        }, 0);
    }
    handleChange(event){
        this.setState({text:event.target.value});
    }
    handleSubmit(event){
        this.setState({textClass:"message-display"});
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="focus-text">
                <label>
                    <input type="text" value={this.state.text} onChange={this.handleChange} onFocus={this._onFocus} onBlur={this._onBlur}/>
                </label>
                {this.state.focus?<p> name a-z A-Z</p>:null}
                </div>
                <input type="submit" value="Greet"/>
                <p className={this.state.textClass}>hello, {this.state.text} have a nice day</p>
            </form>
        );
    }
}

export default GreetingText