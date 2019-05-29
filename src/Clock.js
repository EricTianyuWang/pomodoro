import React, { Component } from 'react';
import Timer from "react-compound-timer";


export class Clock extends Component {

    render() {
        return (
            <div>
            <h1> Pomodoro Timer </h1>
            <Timer
                initialTime={1500000}
                direction = "backward"
                startImmediately={false}
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div>
                            <Timer.Minutes /> minutes <br/>
                            <Timer.Seconds /> seconds
                        </div>
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

            <h1> Break Timer </h1>
            <Timer
                initialTime={300000}
                direction = "backward"
                startImmediately={false}
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <div>
                            <Timer.Minutes /> minutes <br/>
                            <Timer.Seconds /> seconds
                        </div>
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
            </div>
        )
    }
}

export default Clock
