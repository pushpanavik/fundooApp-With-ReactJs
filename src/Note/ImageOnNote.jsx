import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import image from "../icons/image.svg";
class ImageOnNote extends Component{
    render(){
        return(
            <IconButton aria-label="image" style={{marginTop:-135,marginLeft:119}}>
              <img style={{width:17}} src={image} alt="images" />
            </IconButton>
        )
    }
}
export default ImageOnNote;