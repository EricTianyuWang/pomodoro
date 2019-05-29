import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Timer() {
  return <h2>Timer</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
            <li>
              <Link to="/profile/">Profile</Link>
            </li>
 
          </ul>
        </nav>


        <Route path="/timer/" component={Timer} />
        <Route path="/profile/" component={Profile} />
      </div>
    </Router>
  );
}

export default AppRouter;