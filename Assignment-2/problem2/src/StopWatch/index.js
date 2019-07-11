import React from 'react'
import './StyleStopWatch.css'

class StopWatch extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={seconds:0,isRunning:false,laps:[],lapsRunning:false};
    }
    
    timerContinous=()=>{
        this.setState({seconds:this.state.seconds+1});
    }
    handleStartChange=(event)=>{
        this.setState({isRunning:true,lapsRunning:true});
        this.TimeIntervalOutput=setInterval(this.timerContinous,1000);
    }
    handleStopChange=(event)=>{
        this.setState({isRunning:true,lapsRunning:false});
        clearInterval(this.TimeIntervalOutput);
    }
    handleResetChange=(event)=>{
        this.setState({isRunning:false,seconds:0,laps:[]});
        clearInterval(this.TimeIntervalOutput);
    }
    handleLapChange=(event)=>{
        if(this.state.lapsRunning){
        if(this.state.isRunning){
        var LapTime=this.state.seconds;
        this.setState({laps:this.state.laps.concat(LapTime)});
        }
    }
    }
    displayLaps=()=>{
        let LapsOutput=[];
        if(this.state.laps.length > 0){
        for(var i=this.state.laps.length-1;i>0;i--){
            const LapDiff=this.state.laps[i]-this.state.laps[i-1]; 
            const EachLap=(
                <li>
                    <label>
                        #{i+1}  {parseInt((LapDiff / 60).toString())}.{LapDiff % 60} {parseInt((this.state.laps[i] / 60).toString())}.{this.state.laps[i] % 60}
                    </label>
                </li>
            )
            LapsOutput.push(EachLap);
        }
        const Timer=this.state.laps[0] / 60;
        const TimerSec=this.state.laps[0] % 60;
        const TimerMin=parseInt(Timer.toString());
        const FirstLap=(
            <li>
                <label>
                    #1  {TimerMin}.{TimerSec} {TimerMin}.{TimerSec}
                </label>
            </li>)
             LapsOutput.push(FirstLap);
        return LapsOutput
    }
    }
    displayTimer=()=>{
        const Timer=this.state.seconds / 60;
        const TimerSec=this.state.seconds % 60;
        const TimerMin=parseInt(Timer.toString());
        return (
            <label>
                {TimerMin}   {TimerSec} 
            </label>
        );
            
    }
    render(){
        return(
            <div>
                <div className='circle-style'>
                {this.displayTimer()}
                </div>
            {this.state.isRunning ?this.displayLaps():null}
            <div>
            <button onClick={this.handleLapChange}> Lap </button>
            <button onClick={this.handleStartChange}> Start </button>
            <button onClick={this.handleStopChange}> Stop </button>
            <button onClick={this.handleResetChange}> Reset </button>
            </div>
            </div>
        );
    }
}

export default StopWatch