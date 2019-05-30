import React, {Component} from "react";
import Clock from './Clock.js'
import Form from './Form.js'

class Timer extends React.Component {
    
    render(){
        //console.log(this.state.user);
        // console.log(this.props.user)
        return(
            <div> 
                <Clock user = {this.props.user}/>
                <Form user = {this.props.user}/>
            </div>
        )
    }
}

export default Timer;