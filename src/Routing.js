import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timer from './Timer.js';
import Profile from './Profile.js'


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
              <Link to="/timer">Timer</Link>
            {/* </li>
            <li> */}
            <br/>
              <Link to="/profile/">Profile</Link>
            {/* </li> */}
 
          </ul>
        </nav>


        <Route path="/timer/" component={Timer} />
        <Route path="/profile/" component={Profile} />
      </div>
    </Router>
  );
}
}

export default AppRouter;