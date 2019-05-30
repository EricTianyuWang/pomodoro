import React, {Component} from "react";
import Form from './Form.js'
import Clock from './Clock.js'

class Timer extends React.Component {
    
    render(){
        //console.log(this.state.user);
        // console.log(this.props.user)
        return(
            <div> 
                {/* <Clock user = {this.props.user}/> */}
                <Clock user = {this.props.user}/>
                <Form user = {this.props.user}/>
            </div>
        )
    }
}

export default Timer;