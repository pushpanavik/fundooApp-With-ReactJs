import React, { Component } from 'react';
import NoteController from "../controller/NoteController";
import IconButton from "@material-ui/core/IconButton";
import image from "../icons/image.svg";
import pin from "../icons/pin.svg";
import reminders from "../icons/reminders.svg";
import addUser from "../icons/addUser.svg";
import color from "../icons/color.svg";
import archive from "../icons/archive.svg";
import morevert from "../icons/morevert.svg";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

var noteCtrl = new NoteController();
const style = theme => ({
    pinIcon: {
      marginLeft: 246,
      marginTop: -41
    },
   card:{
    direction: 'row',
 
   },
    img: {
      width: 17
    },
    
  });
class OtherNote  extends Component{
  constructor(){
    super();
  this.state={
    show:false,
} 
this.handleClick=this.handleClick.bind(this);
}

handleClick(){
  console.log('for note dialog'); 
  this.setState({
      show:!this.state.show,
  })
}

    render(){
        const { classes } = this.props;
        
        var note=this.props.getData;
     
        return(
          <div>
<Card className="dashboard"   style={{top: 0,
    left: 0,
    height: 100,
    width: 250,}}>

      <div style={{marginTop:10,
      marginLeft:10}}>{note.title} 
      <IconButton style={{float:"right",marginTop:-12}} onClick={() => noteCtrl.isPinned(note)}><img id="otherpin" src={pin} alt="pin"/></IconButton>      </div>
      
      <div style={{marginTop:10,
      marginLeft:10}}>{note.description} 
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
        )
    }
    
}
OtherNote.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(style)(OtherNote);
