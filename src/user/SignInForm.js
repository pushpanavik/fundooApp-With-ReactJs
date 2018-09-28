import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (          
           
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" title="Enter valid email address for eg:abc@xyz.com" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                             </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters"
                className="FormField__Input" minLength="3"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/forgot-password" className="FormField__Link">Forgot Password</Link>
              </div>
             
            </form>
          </div>
        );
    }
}

export default SignInForm;