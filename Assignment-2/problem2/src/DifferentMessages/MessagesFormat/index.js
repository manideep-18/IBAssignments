import React from 'react'

class MessageFormat extends React.Component{
    render(){
        return(
            <div className={this.props.TextClass}>
                <p>{this.props.Text}</p>
            </div>
        )
    }
}

export default MessageFormat