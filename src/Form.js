import React from 'react';
import './App.css'
import {Input, Button} from 'antd';
import firebase from './firebase';
import './Form.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
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

  sendToDatabase = () => {
    var data = {
      title: this.state.title,
      text: this.state.text
    }
    const obj = firebase.database().ref('users/');
    var userKey = "";
    var userEmail = "";
    obj.orderByChild('email').once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        userKey = childSnapshot.key;
        userEmail = childSnapshot.val().email;
        
        if (userEmail === this.props.user) {
          //console.log("user key: "+userKey)
          //console.log("user email: "+userEmail)
          firebase.database().ref('users/'+userKey+'/writing/').push(data);
        }

     });
    });
  }

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

