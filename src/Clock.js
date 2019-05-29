import React, { Component } from 'react';
import Timer from "react-compound-timer";
import { Row, Col, Button, Progress } from 'antd';

export class Clock extends Component {

    state = {
        seconds: 25
    }

    progress = (updatedTime) => {
        this.setState({
            seconds: updatedTime
        })
    }
    timer = (name, startTime) => {
        return (
            <div>
                <h1><b> {name} </b></h1>
                    <Timer
                        initialTime={startTime} // 1500000 300000
                        direction = "backward"
                        startImmediately={false}
                    >
                        {({ resume, pause, reset }) => (
                            <React.Fragment>
                                <div>
                                <Row>
                                    <Col span={6}><Progress type="circle" percent={<Timer.Minutes></Timer.Minutes>} format={percent => <Timer.Minutes/>} /></Col>
                                    <Col span={6}><h1><b> minutes</b></h1></Col>
                                    <Col span={6}><Progress type="circle" percent={<Timer.Seconds></Timer.Seconds>} format={percent => <Timer.Seconds/>} /></Col>
                                    <Col span={6}><h1><b> seconds</b></h1></Col>
                                </Row>
                                <br/>
                                </div> 
                                <div>
                                    <Button onClick={resume} size="large">Start</Button>
                                    <Button onClick={pause} size="large">Pause</Button>
                                    <Button onClick={reset} size="large">Reset</Button>
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
