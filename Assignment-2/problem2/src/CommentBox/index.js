import React from 'react'
import './StyleCommentBox.css'

class CommentBox extends React.Component{
    
    constructor(props){
        super(props);
        this.state={commentsArray:[],commentText: ""};
    }
    handleSubmit=(event)=>{
        var getDetails=new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        const day=weekday[getDetails.getDay()];
        var hoursDisplay = getDetails.getHours();
        var ampm = hoursDisplay >= 12 ? 'pm' : 'am';
        hoursDisplay = hoursDisplay % 12;
        var Minutes=getDetails.getMinutes();
        Minutes = Minutes < 10 ? '0'+Minutes : Minutes;
        let comments={
        commentMessage:this.state.commentText,
        commentDay:day,
        hours:hoursDisplay,
        daytime:ampm,
        Min:Minutes
        }
        /*this.setState({commentDay:day,hours:getDetails.getHours(),Min:getDetails.getMinutes()});
        this.state.commentsArray.push(this.state.commentText);
        this.state.commentsArray.push(this.state.commentDay);
        this.state.commentsArray.push(this.state.hours);
        this.state.commentsArray.push(this.state.Min);*/
        this.setState({commentsArray:this.state.commentsArray.concat(comments),commentText:""});
        event.preventDefault();
    }
    handleChange=(event)=>{
        this.setState({commentText:event.target.value});
    }
    displayComments=()=>{
        let AllComments=[];
        const len=this.state.commentsArray.length;
       console.log(len);
        if(this.state.commentsArray.length > 0){
        for(var i=len-1;i>=0;i--){
            const EachComment=(<div className='CommentBox'>
                <img className="icon-style" src="index.png" />
                CommentUser<br/>
                
                {this.state.commentsArray[i].commentMessage}
                <p>
                {this.state.commentsArray[i].commentDay}  {this.state.commentsArray[i].hours} :  {this.state.commentsArray[i].Min} {this.state.commentsArray[i].daytime}
                </p>
            </div>)
            
            AllComments.push(EachComment);
        }
        return AllComments
    }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                <input type="text"  value={this.state.commentText} onChange={this.handleChange}/>
                <input type="submit" value="Comment"/>
                </form>
                { this.state.commentsArray.length > 0 ? this.displayComments():null}
            </div>
        )
    }
}

export default CommentBox