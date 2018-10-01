import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './user/SignUpForm';
import SignInForm from './user/SignInForm';
import ForgotPassword from './user/ForgotPassword';
import ResetPassword from './user/ResetPassword';
import Navbar from './Navbar';
import ImageUpload from './ImageUpload'; 
import Sidebar from './Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            
              <div className="FormCenter"></div>
              <Route exact path="/" component={SignUpForm}></Route>
              <Route strict path="/sign-in" component={SignInForm}></Route>
              <Route exact path="/forgot-password" component={ForgotPassword}></Route>
              <Route strict path="/reset-password"  component={ResetPassword}></Route>
              <Route exact path="/navbar" component={Navbar}></Route>
              <Route exact path="/image-upload" component={ImageUpload}></Route>
              <Route path="/sidebar" component={Sidebar}></Route>
          </div>

      </Router>
    );
  }
}

export default App;