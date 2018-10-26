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
        this.getImageonCard=this.getImageonCard.bind(this);
    }
  
    triggerInputFile = () => {
        this.fileInput.click();
    }
   
        getImageonCard(e) {
            // e.preventDefault();
            // e.preventDefault();

            let reader = new FileReader();
            var image = '';
           
                let file=e.target.files[0];
           
            // let file = e.target.files[0];
            // let name=e.target.files[0].name;
        
            reader.onloadend = () => {
                 this.setState({
                 imagePreviewUrl: reader.result
               });
            // }
             reader.readAsDataURL(file);
           
        }
        if (e.target.files[0]) {
            image = e.target.files[0].name;
        noteCtrl.uploadImage(this.state.imagePreviewUrl,image);
          }
        }
    render(){

       let note=this.props.getnote;
       
      
        return(
            <div className="previewComponent">
            <input className="hide-file" ref={fileInput => this.fileInput = fileInput}
              type="file" 
              onChange={(e)=>this.getImageonCard(e)} />
            <IconButton  onClick={this.triggerInputFile} aria-label="image" style={{marginTop:-135,marginLeft:119}}>
              <img style={{width:17}} src={image} alt="images" />
            </IconButton>
               </div> 
        )
    }
}
export default ImageOnNote;