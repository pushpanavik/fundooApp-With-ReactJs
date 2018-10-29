import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import image from "../icons/image.svg";
import NoteController from '../controller/NoteController';
var noteCtrl=new NoteController();
class ImageOnNote extends Component{
    constructor(props){
        super(props);
        this.state={
            file: '',
            image:null,
            imagePreviewUrl:null,
            
        }
      
    }
  
    triggerInputFile = () => {
        this.fileInput.click();
    }
          
       
    render(){

       let note=this.props.getnote;
     
      
        return(
            <div className="previewComponent">
            <input className="hide-file" ref={fileInput => this.fileInput = fileInput}
              type="file" 
              onChange={(e)=>noteCtrl.getImageonCard(e,note)} />
            <IconButton  onClick={this.triggerInputFile} aria-label="image" style={{marginTop:-129,marginLeft:119}}>
              <img style={{width:17}} src={image} alt="images" />
            </IconButton>
               </div> 
        )
    }
}
export default ImageOnNote;