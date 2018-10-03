import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {postService} from './UserService';


const APIPATH="http://localhost:9090/fundoo/user/registerUser";
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            firstname:'',
            lastname: '',
            email: '',
            password: '',
            isFormRegisteredSuccessfully:false,
                 };

        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);

        
    }
  
    
    handleChange(e) {
     const name=e.target.name;
     const value=e.target.value;
        this.setState({
          [name]: value
        });
    }
  
    
    validateForm(){
        let errors={};
        let isformValid=true;
        if(this.state.firstname.length === 0){
            isformValid = false;
            errors["firstName"] = "Please enter first name";
        }

        if(this.state.firstname.length > 0 && this.state.firstname !== undefined){
        if(!(this.state.firstname.match(/^[a-zA-Z]$/))){
            isformValid = false;
                errors["firstName"] = "Please enter alphabetical characters only";
            }
        }

        if(this.state.lastname.length === 0){
            isformValid = false;
            errors["lastName"] = "Please enter last name";
        }

        if(this.state.lastname.length > 0 && this.state.lastname !== undefined){
            if(!(this.state.lastName.match(/^[a-zA-Z]$/))){
                isformValid = false;
                errors["lastName"] = "Please enter alphabet characters only";
            }
        }

        if(this.state.email.length === 0){
            isformValid = false;
            errors["email"] = "Please enter email-ID";
        }

        if(this.state.email.length > 0 && this.state.email !== undefined){
            if(!(this.state.email.match(/^.+@.+\..+$/))){
                isformValid = false;
                errors["email"] = "Please enter valid email-ID";
            }
        }

        if(this.state.password.length === 0){
            isformValid = false;
            errors["password"] = "Please enter password";
        }

        if(this.state.password.length > 0 && this.state.password !== undefined){
            if(!(this.state.password.length >= 6)){
                isformValid = false;
                errors["password"] = "Please enter a password of atleast 6 characters";
            }
        }

        this.setState({errors : errors});
        return isformValid;
    }
    registerUser(){
        console.log("inside regitsr user function");
        
        let errors={};
    let formValid=true;
   
    if(this.validateForm()){
        postService(APIPATH, {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        })
        .then(response =>{
            if(response.data.msg === 'User successfully registered'){
                this.setState({isFormRegisteredSuccessfully:true});
                alert("user registered successfully authenticate via login link ")
            }
        })
        .catch(error =>{
            if(error.response.data.msg === 'User Already  Registered'){
                errors['email'] = 'Please choose a different email-ID';
                this.setState({errors : errors});
            }
        });
    }
    }


    render() {
        return (
        <div className="FormCenter">
        <div className="App__Form">
        <div className="App__Aside"></div>
          
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" activeStyle={{fontWeight:'bold'}} className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" activeStyle={{fontWeight:'bold'}}className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" activeStyle={{fontWeight:'bold'}} className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" activeStyle={{fontWeight:'bold'}} className="FormTitle__Link">Sign Up</NavLink>
              </div>
            <form  name="myform"  className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="username">First Name</label>
                <input type="text" id="fname" className="FormField__Input" 
                  placeholder="Enter your first name" name="firstname" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="username">Last Name</label>
                <input type="text" id="lname" className="FormField__Input" 
                  placeholder="Enter your last name" name="lastname" value={this.state.name} onChange={this.handleChange} />
              </div>
             
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" title="Enter valid email address for eg:abc@xyz.com" className="FormField__Input"
                placeholder="Enter your email"  name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
              <label className="FormField__Label" htmlFor="password" >Password</label>
              <input type="password" id="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters"
              className="FormField__Input"  
              placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
            </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.registerUser}>Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
            </div>
          </div>
          );
         
        
    }
}
export default SignUpForm;

