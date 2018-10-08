import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import {postService, getService} from './UserService';
const USER_PATH="http://localhost:9090/fundoo/getUser";
const LOGIN_PATH="http://localhost:9090/fundoo/user/login";
class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.goToLoginPage=this.goToLoginPage.bind(this);
        this.getUserInfo=this.getUserInfo.bind(this);
    }

    
    handleChange(e) {
        let target = e.target;
        let value = e.target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    validateForm(){
        let errors={};
        let isformValid=true;
     
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
    goToLoginPage(){
     
        let check = this.validateForm();
        console.log(check)
        if(check){
        
            postService(LOGIN_PATH, {
                
                email:this.state.email,
                password:this.state.password,
            })
            .then(response =>{
                console.log(response.data);
                if(response.data.status===200){
                    var token=localStorage.setItem('token',response.data.msg);
                    this.setState({
                        successfullyLoggedIn: true,
                        
                    })
                    this.props.history.push("/home"); 
                    this.getUserInfo(response.data.msg);
                }
                if(response.data.status===-101){
                    alert('invalid username or password');
                    return false;
                }
            })
            
            return true;
        }else{
            return false;
        }
    }
getUserInfo(token){
getService(USER_PATH,
   {token }).then(resp=>{
        console.log(resp);
    })
    .catch(error=>{
        console.log(error);
    })
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
           
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" title="Enter valid email address for eg:abc@xyz.com" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                             </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters"
                className="FormField__Input" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button" onClick={()=>{this.goToLoginPage();}}>Sign In</button> <Link to="/forgot-password" className="FormField__Link">Forgot Password</Link>
              </div>
             
            </form>
            </div>
          </div>
        );
    }
}

export default SignInForm;