import React, { Component } from 'react';
import Timer from "react-compound-timer";
import {Button} from 'antd';
import './Clock.css';

export class Clock extends Component {

    render() {
        return (
            <div>
            {/* <h2> Pomodoro Timer </h2> */}
            <Timer
                initialTime={1499000}
                direction = "backward"
                startImmediately={false}
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div className = "timer">
                            <div className = "timer_text">
                                <div className="minutes">
                                    <Timer.Minutes /> :
                                </div>
                                <div className="seconds">
                                    <Timer.Seconds /> 
                                </div>
                            </div>
                            <br />
                            <div className="buttons">
                                <Button onClick={resume} size="large" icon="caret-right">Start</Button>
                                <Button onClick={pause} size="large" icon="pause">Pause</Button>
                                <Button onClick={reset} size="large" icon="undo">Reset</Button>
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