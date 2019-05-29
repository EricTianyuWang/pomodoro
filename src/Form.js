import React from 'react';
import './App.css'
import {Input, Button} from 'antd';
import firebase from './firebase';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      userKey: "",
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
    var obj = firebase.database().ref('users/');
    var userEmail = "";
    obj.orderByChild('email').equalTo(this.props.user).on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        userEmail = childSnapshot.key;
        console.log(userEmail);

     });
    });
    console.log(userEmail)
    firebase.database().ref('users/'+userEmail+'/writing/').push(data);
    console.log("Sent to data base")
  }

  getKey = () => {
    
    // obj.orderByChild('email').equalTo(this.props.user).on("value", function(snapshot) {
    //   snapshot.forEach((function(child) { console.log(child.key) }); 
    // });

    

}

  render() {
    return(
      <div>
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

