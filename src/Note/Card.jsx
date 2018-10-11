import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
  import { withStyles } from "@material-ui/core/styles";
 import PropTypes from "prop-types";
 import IconButton from "@material-ui/core/IconButton";
 import image from "../icons/image.svg";
// import pin from "../icons/pin.svg";
 import reminders from "../icons/reminders.svg";
 import addUser from "../icons/addUser.svg";
 import color from "../icons/color.svg";
 import archive from "../icons/archive.svg";
 import morevert from "../icons/morevert.svg";
 const style = {
    pinIcon: {
      marginLeft: 246,
      marginTop: -41
    },
    card: {
    marginTop: 150,
    marginLeft: 470,
    width: 250,
   
    alignItems:'center'
    },
    img:{
      width:20
    }
  };

class Card extends Component{
    render(){
        return(
            <Card  className={classes.card} style={{backgroundColor:'red'}}>
             
    <IconButton aria-label="Reminder">
         <img  className={classes.img}src={reminders} alt="reminders" />
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
         <img className={classes.img}  src={archive} alt="archive" />
       </IconButton>

       <IconButton aria-label="More Vert">
         <img className={classes.img} src={morevert} alt="archive" />
       </IconButton>
    
     </Card>  
        )
    }  
}
Card.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(style) (Card);