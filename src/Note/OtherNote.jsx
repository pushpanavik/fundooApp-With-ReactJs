import React, { Component } from 'react';
import NoteController from "../controller/NoteController";
import IconButton from "@material-ui/core/IconButton";
import pin from "../icons/pin.svg";
import color from "../icons/color.svg";
import archive from "../icons/archive.svg";
import Menu from '@material-ui/core/Menu';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import Reminder from './Reminder';
import Collaborator from '../Note/Collaborator';
import ImageOnNote from './ImageOnNote';

import MoreOtherNote from './MoreOtherNote';
import OtherNoteColor from './OtherNoteColor';
var noteCtrl = new NoteController();


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
class OtherNote  extends Component{
  constructor(){
    super();
  this.state={
    open:false,
    title:null,
    description: null,
       
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
    this.setState({ 
      anchorEl: e.currentTarget,
     });
};

handleClose = () => {
    this.setState({ anchorEl: null,
     });
};

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
changeColor(data,btn){
  noteCtrl.changeColor(data,btn);
}

    render(){
             
        var note=this.props.getData;
        const { anchorEl } =this.state;
        const { open } = this.state;
        const { classes } = this.props;
        
        return(
          <div>
          <Dialog
             open={this.state.open}
             onClose={this.handleClose}
             aria-labelledby="form-dialog-title"
             fullWidth
          >
           
            <DialogContent>
              
             <div ><input type="text"  style={{outline:'none',border:0}} defaultValue={note.title} onChange={event =>this.setState({title:event.target.value})} />
             <IconButton style={{float:'right',marginTop: -10}}>
               <img src={pin}  alt="pin"/>
             </IconButton>
             </div>
  
             <div style={{marginTop:5}}><input type="text"  style={{outline:'none',border:0}} defaultValue={note.description} onChange={event =>this.setState({description:event.target.value})} />
             </div>
            
            <div style={{
              marginTop: 63,
              marginBottom:-23,
              marginRight: -10,
            }}>
            <div>
           <Reminder/>
           
           <Collaborator/>
         
         
            <IconButton className="change-color-btn"
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
         <div>
            <OtherNoteColor  fetchData={note}/>
        </div>
            </Menu>
            
      
            <ImageOnNote/>
    
            <IconButton aria-label="Archive">
              <img className={classes.img} src={archive} alt="archive" />
            </IconButton>
    
            <MoreOtherNote note={note}/>
           
            </div>
            </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onClose} color="primary" style={{marginTop:-55}}>
                CLOSE
              </Button>
            </DialogActions>
          </Dialog>
       
<Card className="dashboard"   style={{top: 0,
    left: 0,
    height: 100,
    width: 250,
    backgroundColor:note.color}}>

      <div style={{marginTop:10,
      marginLeft:10}}>{note.title} 
      <IconButton style={{float:"right",marginTop:-12}} onClick={() => noteCtrl.isPinned(note)}><img id="otherpin" src={pin} alt="pin"/></IconButton>      </div>
      
      <div style={{marginTop:10,
      marginLeft:10}} onClick={this.handleClick}>{note.description} 
      </div>
      
      <div>
            <Reminder/>
    
            <Collaborator/>
         
            <IconButton className="change-color-btn" style={{marginTop:-92,
            marginLeft:82}}
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
          <div>
              <OtherNoteColor fetchData={note}/>
          </div>
                   
            </Menu>
      
            <ImageOnNote style={{marginTop:-151,marginLeft:125}}/>
    
            <IconButton aria-label="Archive" style={{marginTop:-133}}>
              <img className={classes.img} src={archive} alt="archive" />
            </IconButton>
    
            <div style={{marginTop:18}}>
            <MoreOtherNote data={note}/>
            </div>
           
           
            </div>
          
      </Card>
      
      </div>
        )
    }
    
}
OtherNote.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(style)(OtherNote);
