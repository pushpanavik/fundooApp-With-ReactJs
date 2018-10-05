import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './user/SignUpForm';
import SignInForm from './user/SignInForm';
import ForgotPassword from './user/ForgotPassword';
import ResetPassword from './user/ResetPassword';
import Navbar from './user/Navbar';
import ImageUpload from './ImageUpload'; 
import Sidebar from './user/Sidebar';

import Home from './user/Home'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            
              <div className="FormCenter"></div>
              <Route exact path="/" component={SignUpForm}></Route>
              <Route strict path="/login" component={SignInForm}></Route>
              <Route exact path="/forgot-password" component={ForgotPassword}></Route>
              <Route strict path="/resetPassword"  component={ResetPassword}></Route>
              <Route exact path="/navbar" component={Navbar}></Route>
              <Route exact path="/image-upload" component={ImageUpload}></Route>
              <Route path="/sidebar" component={Sidebar}></Route>
              <Route exact path="/home" component={Home}></Route>
             
            
          </div>

      </Router>
    );
  }
}

export default App;