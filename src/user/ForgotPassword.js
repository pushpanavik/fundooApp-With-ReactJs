import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
class ForgotPassword extends React.Component{
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

            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" title="Enter valid email address for eg:abc@xyz.com" className="FormField__Input"
       placeholder="Enter your email"  name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <Button >Submit</Button>
            </div>
        )
    }
}
export default ForgotPassword;