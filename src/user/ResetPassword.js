import React,{Component} from 'react';
import {postResetService} from './UserService';
import queryString from 'query-string';
class ResetPassword extends Component{
    constructor(){
        super();
        this.state={
            password :'',
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetPasswordFunction=this.resetPasswordFunction.bind(this);
    }
    handleChange(e) {
        this.setState({
          password: e.target.value
        });
    }
  
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    validateForm(){
        let errors={};
        let isformValid=true;
    
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
    resetPasswordFunction(){
       let gettokenFromUrl=queryString.parse(this.props.location.search);
    console.log('token from url',gettokenFromUrl);
        let check = this.validateForm();
        console.log(check)
        if(check){
        
            postResetService(gettokenFromUrl, {  
                password:this.state.password,
                
            })
            .then(response =>{
                    this.props.history.push("/login");
              
            })
            .catch(error =>{
                console.log(error);
                window.location.reload();
                this.props.history.push("/resetPassword"); 
            }); 
            return true;
        }else{
            return false;
        }
    }

    render(){
        console.log("pass:+++++=", this.state.password);
        
        return(
            <div className="FormCenter">
            <div className="App__Form">
            <div className="FormForgot" >Reset Password</div>
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter new password" onChange={this.handleChange}   />
              </div>
    
              <div className="FormField">
                  <button className="FormField__Button" onClick={this.resetPasswordFunction}>SUBMIT</button>
              </div>
              </form>
              </div>
            </div>
        )
    }
}
export default ResetPassword;