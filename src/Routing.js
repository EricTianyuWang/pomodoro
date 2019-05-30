import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timer from './Timer.js';
import Break from './Break.js'
import Profile from './Profile.js'

import { Menu, Icon } from 'antd';

const { SubMenu }  = Menu;


function Index() {
  return <div>
    <h2>
      <p><strong>Welcome to the Best Pomodoro Timer!</strong></p>
      Developed by Annie, Eric, and Maggie
    </h2>

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
                <Link to="/pomodoro">Pomodoro</Link>
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
        <Route 
          path="/pomodoro" component={Timer} />
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