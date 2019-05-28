import React, { Component } from 'react';
import Timer from "react-compound-timer";


export class Clock extends Component {
    constructor(props){
        super(props);
         this.state = {
          seconds: '00',   // responsible for the seconds 
          minutes: '25'  // responsible for the minutes
       }
    }

    handlePomodoroClick = (e) => {
        this.setState({minutes: 25});
    }

    handleBreakClick = (e) => {
        this.setState({minutes: 5});
    }

    render() {
        return (
            <div>
            <Timer
                initialTime={1500000}
                direction = "backward"
                startImmediately={false}
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div>
                            <Timer.Minutes /> minutes
                            <Timer.Seconds /> seconds
                        </div>
                        <div>{timerState}</div>
                        <br />
                        <div>
                            <button onClick={start}>Start</button>
                            <button onClick={pause}>Pause</button>
                            <button onClick={resume}>Resume</button>
                            <button onClick={stop}>Stop</button>
                            <button onClick={reset}>Reset</button>
                        </div>
                    </React.Fragment>
                )}
            </Timer>
                <button onClick={this.handlePomodoroClick}>Pomodoro</button>
                <button onClick={this.handleBreakClick}>Break</button>
            </div>
        )
    }
}

export default Clock
