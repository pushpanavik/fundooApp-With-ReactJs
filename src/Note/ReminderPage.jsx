import React, { Component } from 'react';
import reminders from "../icons/reminders.svg";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Clock from '../images/Clock.svg';
import BackArrow from '../images/BackArrow.svg'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NoteController from '../controller/NoteController';
import { Button } from '@material-ui/core';
var dateFormat=require('dateformat');
var currentDate=new Date();
var dateDay=dateFormat(currentDate,"fullDate");
var noteCtrl=new NoteController();

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  });

class ReminderPage extends Component{
    constructor(props){
        super(props);
        this.state={
            anchorEl: null,
            open:false,
            note:[] ,
           
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
    handleClickReminder=e=>{
        this.setState({ anchorElReminder: e.currentTarget});
    }
    handleCloseReminder =()=>{
        this.setState({anchorElReminder:null})
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
    componentDidMount(){
        var self=this;
        noteCtrl.getUserNote(function(noteDetails){
            if(noteDetails!==null ||noteDetails!==undefined){
                self.setState({
                    note:noteDetails
                })
            }
            else{
                self.setState({
                    note:[]
                })
            }
            
        })
    }
    todayReminder=(note)=>{
        noteCtrl.todayReminder(note);
    }
    tommorrowReminder=(note)=>{
        noteCtrl.tommorrowReminder(note);
    }
    nextWeek=(note)=>{
        noteCtrl.nextWeek(note);
    }

    
    render(){
        var note=this.props.fetchDataFromParent;
               let {classes}=this.props;
       
        const { anchorEl } =this.state;
        const{anchorElReminder}=this.state;
        const { open } = this.state;
        //    if(note.reminderDate){
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
                <MenuItem>Reminder</MenuItem>
                <MenuItem  onClick={() => { this.handleCloseReminder();this.todayReminder(note)}}> Later Today <div style={{marginLeft:91}}>8:00 PM</div></MenuItem>
                <MenuItem  onClick={() => { this.handleCloseReminder();this.tommorrowReminder(note)}}>Tommorow <div style={{marginLeft:91}}>8:00 AM</div></MenuItem>
                <MenuItem  onClick={() => { this.handleCloseReminder();this.nextWeek(note)}}>Next week<div style={{marginLeft:91}}>Mon 8:00  AM</div></MenuItem>
                
                <MenuItem aria-owns={anchorElReminder ? 'reminder-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClickReminder}
                            style={{marginRight:119}}>
                <img src={Clock} alt="date"  style={{margintTop:1,marginRight:15}}/>Pick date & time
                </MenuItem>      
                </Menu>
    
                <Menu id="simple-menu"
                        anchorEl={anchorElReminder}
                        open={Boolean(anchorElReminder)}
                        onClose={this.handleCloseReminder}
                >
                <div style={{outline:'none',border:"none"}}><img src={BackArrow} style={{width:25,height:25,marginBottom:-7,marginTop:12}} alt="not found"/>Pick date and time </div>
              <br/>
                <div>
                <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue={dateDay}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
     
    </form>
                    </div>
                    <br/>
                <MenuItem>
                <div>

                </div>
                </MenuItem>
                <MenuItem></MenuItem>
            <Button style={{height:30,width:40,marginLeft:142}} onClick={()=>{this.handleCloseReminder();noteCtrl.updateNote(note)}}>Save</Button>
                </Menu>
                </div>
                 )
        // }
        // else{
        //     return(
        //         <div></div>
        //     )
        // }
    }
}
ReminderPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(ReminderPage);