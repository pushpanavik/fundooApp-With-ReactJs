import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import image from "../icons/image.svg";
import pin from "../icons/pin.svg";
import reminders from "../icons/reminders.svg";
import addUser from "../icons/addUser.svg";
import color from "../icons/color.svg";
import archive from "../icons/archive.svg";
import morevert from "../icons/morevert.svg";

const style = theme => ({
  pinIcon: {
    marginLeft: 246,
    marginTop: -41
  },
  card: {
 
  top: 0,
  left: 0,
  height: 100,
  width: 250,
  alignItems: "center"
  },
  img: {
    width: 17
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class DisplayCard extends Component {
 
  
  render() {
    const { classes } = this.props;
    console.log( this.props.getDataFromParent);
   
   
    return (
     

      <Card className={classes.card}>
      <div style={{marginTop:10,
      marginLeft:10}}>{this.props.getDataFromParent.title} 
      <IconButton style={{float:"right",marginTop:-12}}><img src={pin} alt="pin"/></IconButton>
      </div>
      
      <div style={{marginTop:10,
      marginLeft:10}}>{this.props.getDataFromParent.description} 
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
    );
  }
}
DisplayCard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(style)(DisplayCard);
