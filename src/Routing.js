import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timer from './Timer.js';
import Profile from './Profile.js'

function Index() {
  return <div><h2><p>Welcome to the Best Pomodoro Timer!</p>Developed by Annie, Eric, and Maggie</h2>
  
  </div>;
}

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: this.props.email,
    }
  }





render(){
  console.log(this.state.user)
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li> */}
            <Link to="/">Home</Link>
            <br/>
              <Link to="/timer">Timer</Link>
            {/* </li>
            <li> */}
            <br/>
              <Link to="/profile/">Profile</Link>
            {/* </li> */}
 
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
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