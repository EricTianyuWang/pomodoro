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
  }

  sendToDatabase = async() => {
    var data = {
      email: this.state.user,
        title: this.state.title,
        text: this.state.text
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
        <h1><b>Write down your thoughts...</b></h1>
        <Input.TextArea placeholder="Title" rows={1} onChange={this.handleTitleChange}/>
        <div style={{ margin: '20px 20px' }} />
        <Input.TextArea
          placeholder="Write here..."
          rows={5}
          size="small"
          autosize={{minRows: 8, maxRows: 12}}
          onChange={this.handleTextChange}
        />
        <p></p>
        <p></p>
        <Button type="primary" size="large" onClick={this.handleClick}>Submit</Button>
    </div>
    );
  }
}

