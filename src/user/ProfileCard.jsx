import React, { Component } from 'react';
import { Card, IconButton } from '@material-ui/core';

class ProfileCard extends Component{
   
  
    handleChange(){
     
    }
    render(){
       // var item=localStorage.getItem('user');
        return(
            <Card  className="profile-card">
            <IconButton onClick={this.handleChange.bind(this)} >Logout</IconButton>
            </Card>
        )
    }
}
export default ProfileCard;