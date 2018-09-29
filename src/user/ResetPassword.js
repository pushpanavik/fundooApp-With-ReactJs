import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
class ResetPassword extends React.Component{
    constructor(){
        super();
        this.state={
            email:""
        }
        this.handleChange=this.handleChange.bind(this);
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
    render(){
        return(
            <div className="FormCenter">
            <div className="App__Form">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters"
                className="FormField__Input" minLength="3"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Confirm Password</label>
                <input type="password" id="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 3 or more characters"
                className="FormField__Input" minLength="3"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
             
              <div className="FormField">
                  <button className="FormField__Button mr-20">SUBMIT</button>
              </div>
              </div>
            </div>
        )
    }
}
export default ResetPassword;