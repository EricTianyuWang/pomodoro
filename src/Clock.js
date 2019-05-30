import React, { Component } from 'react';
import Timer from "react-compound-timer";
import {Button} from 'antd';
import './Clock.css';

export class Clock extends Component {

    render() {
        return (
            <div>
            <h2> Pomodoro Timer </h2>
            <Timer
                initialTime={1500000}
                direction = "backward"
                startImmediately={false}
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div className = "timer">
                            <div className = "timer_text">
                                <Timer.Minutes /> :
                                <Timer.Seconds /> 
                                
                            </div>
                            <br />
                            <div>
                                <Button onClick={resume} size="large">Start</Button>
                                <Button onClick={pause} size="large">Pause</Button>
                                <Button onClick={reset} size="large">Reset</Button>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </Timer>
            </div>
        )
    }
}

export default Clock