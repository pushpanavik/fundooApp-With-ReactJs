import React,{Component} from 'react';
import {postService} from './UserService';
const FORGOT_PATH="http://localhost:9090/fundoo/user/forgotPassword";

class ForgotPassword extends Component{
    constructor(){
        super();
        this.state={
            email:'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.forgot=this.forgot.bind(this);
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
        this.setState({errors : errors});
        return isformValid;
    }

    forgot()
    {
        let check = this.validateForm();
        console.log(check);
        if(check){
        
            postService(FORGOT_PATH, {
                
                email:this.state.email,
                
            })
            .then(response =>{
                console.log(response.data);
                localStorage.setItem('forgotToken',response.data.msg);
                alert('go to Link')
              
            })
            .catch(error =>{
                console.log(error);
                this.props.history.push("/forgot-password"); 
            }); 
            return true;
        }else{
            return false;
        }
    }
    render(){
        return(
            <div className="FormCenter">
              <div className="App__Form">
            <div className="FormForgot" >Forgot Password</div>
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" title="Enter valid email address for eg:abc@xyz.com" className="FormField__Input"
       placeholder="Enter your email"  name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
             
              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.forgot}>SUBMIT</button>
              </div>
              </form>
              </div>
            </div>
        )
    }
}
export default ForgotPassword;