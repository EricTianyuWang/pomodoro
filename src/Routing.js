import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timer from './Timer.js';
import Break from './Break.js'
import Profile from './Profile.js'
import tom from './tom.png'

import { Menu, Icon } from 'antd';
const { SubMenu }  = Menu;


function Index() {

  var styles1 = {
    paddingTop:50,
    textAlign: 'center',
  };

  var styles2 = {
    paddingLeft:50, 
    paddingRight:50,
  };

  var styles3 = {
    textAlign: 'center',
    paddingLeft:100,
  }

  return <div>
    <h1 style={styles1}>Welcome to the Pomodoro Timer</h1>
    <div style={styles2}>
      <p>
          The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
          The technique uses a timer to break down into intervals, traditionally 25 minutes in length, separated by short breaks.
          Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped 
          kitchen timer that Cirillo used as a univeristy student.
      </p>
      <p> 
          The technique has been widely popularized by dozens of apps and websites providing timers and instructions. 
          Closely related concepts such as timeboxing and iterative and incrimental developement in software developement, the method
          has been adopted in paired porgramming contexts.
      </p>
      <p>
        We hope you give it a try & enjoy. 
      </p>
      <p>Annie, Eric, and Maggie</p>
      <div style={styles3}>
        <img src={tom}/>
      </div>
    </div>   
  </div>;
}

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: this.props.email,
    }
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

render(){
  console.log(this.state.user)
  return (

  <Router>
      <div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

            <Menu.Item key="home">
              <Link to="/">Home</Link> 
            </Menu.Item>

            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  Timer
                </span>
              }
            >
              <Menu.Item key="setting:1">
                <Link to="/timer">Pomodoro</Link>
              </Menu.Item>

              <Menu.Item key="setting:2">
                <Link to="/break">Break</Link>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="profile">
              <Link to="/profile/">Profile</Link>
            </Menu.Item>

          </Menu>

        <Route 
          path="/" exact component={Index} />
        {/* <Route 
          path="/pomodoro" component={Timer} /> */}
        <Route
          path="/break" component={Break} />

        <Route
          path='/timer'
          render={(props) => <Timer {...props} user={this.state.user} />}
        />
        <Route
          path='/profile'
          render={(props) => <Profile {...props} user={this.state.user} />}
        />
      </div>
  </Router>
  );
  }
}

export default AppRouter;