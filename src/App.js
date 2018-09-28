import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './user/SignUpForm';
import SignInForm from './user/SignInForm';
import ForgotPassword from './user/ForgotPassword';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" activeStyle={{fontWeight:'bold'}} className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" activeStyle={{fontWeight:'bold'}}className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" activeStyle={{fontWeight:'bold'}} className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" activeStyle={{fontWeight:'bold'}} className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route strict path="/sign-in" component={SignInForm}>
              </Route>
              <Route exact path="/forgot-password" component={ForgotPassword}>
              </Route>
              
          </div>

        </div>
      </Router>
    );
  }
}

export default App;