import React from 'react';
import './App.css'
import {Input, Button} from 'antd';
import firebase from './firebase';
import './Form.css';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      user: this.props.user,
      timeStamp: ""
    }
  }

  handleTitleChange = (event) => {
		this.setState({
			title: event.target.value
    })
  }

  handleTextChange = (event) => {
		this.setState({
			text: event.target.value
    })
  }
  
  handleClick = () => {
    this.sendToDatabase();
    this.resetForm();
  }

  resetForm() {
    this.setState({
      title: "", 
      text: "",
    });
  }

  sendToDatabase = async() => {
    const date = (new Date()).toDateString();
    //const date2 = new Date();
    //console.log(date);
    //console.log(date.getTime());
    var data = {
        email: this.state.user,
        title: this.state.title,
        text: this.state.text,
        timeStamp: date
    }

    const usersRef = firebase.database().ref('users');

    firebase.database().ref('users').push(data); //might change users
    console.log("Sent to data base")

  }
  
  // let user ="";
  // let email=""
  // usersRef.orderByChild('email').equalTo(this.state.user).on("value", function(snapshot) {
  //   snapshot.forEach((function(child) { console.log(child.key) ;
  //     user = child.key;
      
  //    firebase.database().ref('users/'+child.key+'/text').set({"Activity":"What I did"})
  //       var updates = {};
  //      updates['users/' + child.key +'/'+child.val().email] = {jkhd: 'sometextqwd'};

  render() {
    return(
      <div className = "form">
        {/* {this.props.user} */}
        <h1><b>What did you accomplish?</b></h1>
        <Input.TextArea placeholder="Title" rows={1} onChange={this.handleTitleChange} value={this.state.title}/>
        <div style={{ margin: '20px 20px' }} />
        <Input.TextArea
          placeholder="Write here..."
          rows={5}
          size="small"
          autosize={{minRows: 8, maxRows: 12}}
          onChange={this.handleTextChange}
          value = {this.state.text}
        />
        <p></p>
        <p></p>
        <Button type="primary" size="large" onClick={this.handleClick}>Submit</Button>
        <p>{this.state.timeStamp}</p>
    </div>
    );
  }
}

