import React, { Component } from 'react';
import Timer from "react-compound-timer";
import { Row, Col, Button } from 'antd';

export class Clock extends Component {

    timer = (name, startTime) => {
        return (
            <div>
                <h1><b> {name} </b></h1>
                    <Timer
                        initialTime={startTime} //300000 1500000
                        direction = "backward"
                        startImmediately={false}
                    >
                        {({ resume, pause, reset, timerState }) => (
                            <React.Fragment>
                                <div>
                                    <h2><Timer.Minutes/> minutes</h2>
                                    <h2><Timer.Seconds/> seconds</h2>
                                </div>
                                <div>
                                    <Button onClick={resume}>Start</Button>
                                    <Button onClick={pause}>Pause</Button>
                                    <Button onClick={reset}>Reset</Button>
                                </div>
                            </React.Fragment>
                        )}
                    </Timer>
            </div>
        )
    }

    render() {
        return (
            <div>
            <Row>
                <Col span={12}>{this.timer("Pomodoro Timer", 1500000)}</Col>
                <Col span={12}>{this.timer("Break Timer", 300000)}</Col>
            </Row>
            </div>
        );
    }
}

export default Clock
