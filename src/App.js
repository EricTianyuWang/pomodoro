import React from 'react';
import Form from './Form.js';
import './App.css';
import Clock from './Clock';
import Profile from './Profile';

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Clock/>
        <Form/>
      </div>
    );
  }
}
