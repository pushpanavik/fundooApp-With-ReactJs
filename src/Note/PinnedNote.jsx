import React, { Component } from 'react';
import NoteController from "../controller/NoteController";
import IconButton from "@material-ui/core/IconButton";
import image from "../icons/image.svg";
import BluePin from  '../images/BluePin.svg';
import reminders from "../icons/reminders.svg";
import addUser from "../icons/addUser.svg";
import color from "../icons/color.svg";
import archive from "../icons/archive.svg";
import morevert from "../icons/morevert.svg";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


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
class PinnedNote  extends Component{
  constructor(){
    super();
  this.state={
    open:false,
} 
this.handleClick=this.handleClick.bind(this);
}
handleClick(){
  console.log('for note dialog'); 
  this.setState({
      open:!this.state.open,
  })
}
handleClose = () => {
  this.setState({ open: false });
};

componentDidMount() {
 
}
handleChange = (e) => {
 this.setState({title: e.target.value});
}

    render(){
      console.log(this.state.open)
        const { classes } = this.props;
        var note=this.props.getData;
               
        return(
     <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
         
          <DialogContent>
            
            <TextField            
              id="name"
              type="text"
              value={note.title}

              fullWidth
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
     

    <Card  className="dashboard" style={{top: 0,
    left: 0,
    height: 100,
    width: 250,
   }} >
 
      <div style={{marginTop:10,
      marginLeft:10}}>{note.title} 
      <IconButton style={{float:"right",marginTop:-12}} onClick={() => noteCtrl.isPinned(note)}><img  id="bluepin" src={BluePin} alt="pin"/></IconButton>
      </div>
      
      <div style={{marginTop:10,
      marginLeft:10}} onClick={this.handleClick}>{note.description} 
      </div>
      
      <div>
        <IconButton aria-label="Reminder">
          <img className={classes.img} src={reminders} alt="reminders" />
        </IconButton>

        <IconButton aria-label="Collaborator">
          <img className={classes.img} src={addUser} alt="collaborator" />
        </IconButton>

        <IconButton aria-label="Color">
          <img className={classes.img} src={color} alt="color" />
        </IconButton>

        <IconButton aria-label="image">
          <img className={classes.img} src={image} alt="images" />
        </IconButton>

        <IconButton aria-label="Archive">
          <img className={classes.img} src={archive} alt="archive" />
        </IconButton>

        <IconButton aria-label="More Vert">
          <img className={classes.img} src={morevert} alt="archive" />
        </IconButton>
        </div>
      </Card>
      </div> 
        );
    }
    
}
PinnedNote.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(style)(PinnedNote);
