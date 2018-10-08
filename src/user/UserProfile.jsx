import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import account from '../icons/account.svg';
import {Collapse, Card} from '@material-ui/core';
class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            open: true,
        }
    
    }
    handleClick(){
        open: !this.state.open
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
        return(
            <div>
            <Collapse in={this.state.open}> 
            <IconButton onClick={this.handleClick} style={{marginBottom: -14,}} color="inherit">
            <img src={account} alt="Account"/>
            </IconButton>
            </Collapse>

            
            <Collapse in={!this.state.open}>
            <Card>
                <div ></div>
            </Card>
           
            
            </Collapse>
            </div>
        )
    }
   
}export default UserProfile;