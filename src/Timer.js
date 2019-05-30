import React, {Component} from "react";
import Form from './Form.js'
import Clock from './Clock.js'

class Timer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
        }
    }
    render(){
        console.log(this.state.user);
        // console.log(this.props.user)
        return(
            <div> 
                {/* <Clock user = {this.props.user}/> */}
                <Clock user = {this.state.user}/>
                <Form user = {this.state.user}/>
            </div>
        )
    }
}

export default Timer;