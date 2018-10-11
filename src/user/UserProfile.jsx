import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import account from '../icons/account.svg';

import ProfileCard from './ProfileCard';
class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            isHidden: true,
            firstLetter:null
      } 
      
      this.getUserDetails=this.getUserDetails.bind(this);
      this.getInitialsLetter=this.getInitialsLetter.bind(this);
      this.toggleHidden=this.toggleHidden.bind(this);
    }
    toggleHidden() {
        console.log('under toggle');
        this.setState({
          isHidden: !this.state.isHidden,
          
        })
      }
     
      
      getUserDetails(userInfo){
          localStorage.setItem('user',userInfo)
          let firstname=userInfo.firstname;
          console.log(firstname);
          
          let takeLetter=this.getInitialsLetter(firstname);
            console.log(takeLetter);
            
          this.setState={
              firstLetter:takeLetter,
          }
      }
    
      
    getInitialsLetter(name) {
        var canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        canvas.width = '32';
        canvas.height = '32';
        document.body.appendChild(canvas);
        var context = canvas.getContext('2d');
        context.fillStyle = "green";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = "16px Arial";
        context.fillStyle = "#ccc";
        var first;
        if (name && name !==undefined) {
          console.log("under first name");
            first = name.charAt(0);
            console.log(first);
                var initials = first;
                context.fillText(initials.toUpperCase(), 10, 23);
            var data = canvas.toDataURL();
            document.body.removeChild(canvas);
            return data;
        } else {
            return false;
        }
}
    
    render()
    {
        console.log(this.state.firstLetter);
        
        //var firstname=localStorage.getItem('firstname');
        return(
            <div>
           
            <IconButton   style={{marginBottom: -14}} >
            <img src={account} onChange={this.toggleHidden} style={{borderRadius:50}}  alt="Account"/>
            </IconButton>           
            <div >
            <ProfileCard/>
            </div>
            </div>
        )
    }
   
}export default UserProfile;