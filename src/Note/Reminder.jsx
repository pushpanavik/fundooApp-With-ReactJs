import React, { Component } from 'react';
import reminders from "../icons/reminders.svg";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
class Reminder extends Component{
    constructor(){
        super();
        this.state={
            anchorEl: null,
            open:false,  
        }
        
    }
    
    OnOpen=()=>{
      this.setState({
          open:true,
      })  
    }
    onClose=() =>{
        this.setState({
            open:false,
        })
    }
    handleClick = e => {      
        this.setState({ anchorEl: e.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        const { anchorEl } =this.state;
        const { open } = this.state;
        
        return(            
            <div>
            <IconButton aria-label="Reminder"
            aria-owns={open ? 'reminderMenu' : null}
            aria-haspopup="true"
            onClick={(event) => this.handleClick(event)}
           
            >
            <img style={{width: 17}} src={reminders} alt="reminders" />
            </IconButton>
            <Menu id="menu"
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)} 
            onClose={this.handleClose}
           >      
            </Menu>
            </div>
        )
    }
}
export default Reminder;