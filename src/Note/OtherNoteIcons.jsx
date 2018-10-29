import React, { Component } from 'react';
import color from "../icons/color.svg";
import archive from "../icons/archive.svg";

import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Menu from '@material-ui/core/Menu';
import Reminder from './Reminder';
import Collaborator from './Collaborator';
import ImageOnNote from './ImageOnNote';
import MoreOnNote from './MoreOnNote';
import OtherNoteColor from './OtherNoteColor';
import NoteController from '../controller/NoteController';
var noteCtrl=new NoteController();

const style = theme => ({
    root: {
      width: '100%',
      maxWidth: '350px',
      backgroundColor: theme.palette.background.paper,
    },
      img: {
        width: 17
      },
      
         
    });
      
class OtherNoteIcons extends Component{
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
        var note=this.props.data;
          
        const { anchorEl } =this.state;
        const { open } = this.state;
        const { classes } = this.props;
        
        return(
            
            <div style={{height:50}}>
           <Reminder />
            <div>
           <Collaborator/>
            </div>
             
             <IconButton className="change-color-btn" style={{marginTop:-96,marginLeft:80}}
              aria-owns={open ? 'menu' : null}
              aria-haspopup="true"
              onClick={(event) => this.handleClick(event)}
            >
            <img className={classes.img} src={color} alt="color" />
            </IconButton>
            <Menu id="menu"
            anchorEl={anchorEl} 
            open={Boolean(anchorEl)} 
            onClose={this.handleClose}
           >
                   <OtherNoteColor fetchData={note}/>      
            </Menu>
            
            <div>
                <ImageOnNote getnote={note}/>
            </div>
   
            <IconButton onClick={()=>{noteCtrl.isArchiveNote(note);}} style={{marginTop:-164, marginLeft:160}} aria-label="Archive">
              <img className={classes.img} src={archive} alt="archive" />
            </IconButton>
            
            <div>
                <MoreOnNote getnote={note}/>
            </div>
                                   
            </div>
        
         
        )
    }
   
}
OtherNoteIcons.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(style)(OtherNoteIcons);