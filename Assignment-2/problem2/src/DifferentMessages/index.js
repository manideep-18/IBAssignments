import React from 'react'
import MessageFormat from './MessagesFormat'
import './success-msg.css'

class DifferentMessages extends React.Component{
    render(){
        return(
            <div className="format-style">
                <div>
                <MessageFormat TextClass="success-message" Text="This is suicess-msg"/>
                <MessageFormat TextClass="info-message" Text="This is info-msg"/>
                <MessageFormat TextClass="warning-message" Text="This is warning-msg"/>
                <MessageFormat TextClass="error-message" Text="This is warning-msg"/>
                </div>
            </div>
        );
    }
}

export default DifferentMessages