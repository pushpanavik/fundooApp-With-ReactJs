import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpForm from './user/SignUpForm';
import SignInForm from './user/SignInForm';
import ForgotPassword from './user/ForgotPassword';
import ResetPassword from './user/ResetPassword';
import Navbar from '../src/user/Navbar';
import Home from './user/Home'
import './App.css';
import ArchiveNote from './Note/ArchiveNote';
import TrashNote from './Note/TrashNote';
import ReminderPage from './Note/ReminderPage'
import DisplayLabel from './Note/DisplayLabel';
import Note from './Note/Note'


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
              <Route  path="/home" component={Home}/>
              <Route  path='/home/note' component={Note}/>
             
              <Route  path='/home/trash' component={TrashNote}/>
              <Route  path='/home/archive' component={ArchiveNote}/>
              <Route path="/home/label" component={DisplayLabel}/> 
             
              <Route  path='/home/reminder' component={ReminderPage}/>  
              
              
              
             
              
            
             
             
            
          </div>

      </Router>
    );
  }
}

export default App;