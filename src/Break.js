import React, { Component } from 'react'
import Timer from "react-compound-timer";
import {Button} from 'antd';
import './Clock.css';

export class Break extends Component {
    render() {
        return (
            <div>
            {/* <h2> Break Timer </h2> */}
            <Timer
                initialTime={299000}
                direction = "backward"
                startImmediately={false}
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div className="timer">
                        <div className="timer_text">
                            <div className="minutes">
                                0<Timer.Minutes /> :
                            </div>
                            <div className="seconds">
                                <Timer.Seconds /> 
                            </div>
                           
                        </div>
                        <br />
                        <div className="buttons">
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

export default Break
