import React, { Component } from 'react';
import NoteController from "../controller/NoteController";
import IconButton from "@material-ui/core/IconButton";
import pin from "../icons/pin.svg";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import OtherNoteIcons from './OtherNoteIcons';
import { Chip } from '@material-ui/core';
import Delete from '../images/Delete.svg'

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
  constructor(props){
    super(props);
  this.state={
    open:false,
    title:"",
    description: "",
    notes:[],
    labels:[],
    archive:false
    
} 
this.handleClick=this.handleClick.bind(this);

}
handleClick(){
  this.setState({
      open:!this.state.open,
  })
}
handleClose = () => {
  this.setState({ open: false });
};
updateNote(){
  var note=this.props.getData;
  const noteObj = {
    id:note.id,
    title: this.state.title,
    description: this.state.description,
    pin:note.pin,
    trash:note.trash,
    archive:note.archive,
    createdAt:note.createdAt,
    lastupdatedat:note.lastupdatedAt,
    color:note.color,
    user:note.user
}
  noteCtrl.updateNote(noteObj)
}
updateDataOnNote=(note)=>{
  console.log('othernote parent');
  this.setState({
    archive:note.archive,
    title:note.title,
    description:note.description,
  })
}
    render(){
       
        var note=this.props.getData;
        var labellist=note.listOfLabels;
        
        // return(
        //   Object.values(labellist).map((labels,i)=>{
        //     var label=labels;
        //     console.log(label.name);        
          if(note.trash===false && note.pin===false && note.archive===false ){    
        return(
          <div>
          <Dialog
             open={this.state.open}
             onClose={this.handleClose}
             aria-labelledby="form-dialog-title"
             fullWidth
          >
           
            <DialogContent style={{overflowY:"hidden"}}>
            { note.image ?
         <img style={{}}src={note.image} alt="noteImage"/>
         :null
         }
             <div style={{marginTop:-44,position:'absolute'}} ><input type="text"  style={{outline:'none',border:0}} defaultValue={note.title} onChange={event =>this.setState({title:event.target.value})} />
             <IconButton style={{marginTop: -594,marginLeft:314,backgroundColor:"red"}}>
               <img src={pin}  alt="pin"/>
               
             </IconButton>
           
         <IconButton style={{backgroundColor:"red",marginTop:-107,marginLeft:479}}>
         {note.image ?
         <img src={Delete} alt="deleteimg" />
        :null}
         </IconButton>
        

             </div>
  
             <div style={{position:'absolute',marginTop:-17,marginRight:-102}}><input type="text"  style={{outline:'none',border:0,position:'absolute'}} defaultValue={note.description} onChange={event =>this.setState({description:event.target.value})} />
             </div>
            
            <div style={{
             position:'absolute'

            }}>

            <OtherNoteIcons fetchData={note}/>
            </div>
            
            </DialogContent>
            <DialogActions>
            <Button  onClick={() => {
                  this.handleClose();
                  this.updateNote();
                }} color="primary" style={{}}>
              CLOSE
            </Button>
            </DialogActions>
          </Dialog>
       
<Card className="dashboard"    style={{
    backgroundColor: note.color,
    width:240,
    marginTop:30,
    marginRight:70,
  }}>

      <div style={{marginTop:10,
      marginLeft:10}}>{note.title} 
      <IconButton style={{float:"right",marginTop:-12}} onClick={() =>{this.props.takeNoteDataFromUnpin(note); noteCtrl.isPinned(note)}}>
      <img id="otherpin" src={pin} alt="pin"/></IconButton>
      { note.image ?
         <img src={note.image} alt="noteImage"/>
         :
         null
         }
        
       </div>
      
      <div style={{marginTop:10,
      marginLeft:10}} onClick={this.handleClick}>{note.description} 
      </div>
      
      <div>
        {/* <div  key={i}>
      { label.name ?
          <Chip 
          label={label.name}
          onDelete={() => noteCtrl.deleteLabelOnNote(label,note)}
          style={{ borderRadius: 50, height: 24, marginLeft: 10, fontSize: 11 }}
          />
          :null
       } 
         
        </div> */}

         <div style={{marginTop:5}}>
             {note.reminderDate ?
               <Chip
               label={note.reminderDate}
               onDelete={() => noteCtrl.deleteReminderOnNote(note)}
               style={{ borderRadius: 50, height: 24, marginLeft: 10, fontSize: 11 }}
               />
               :
               null
               }
          
             </div>
        
      <OtherNoteIcons  data={note}/>         
      </div>
          
      </Card>
      
      </div>
        )
          
    }
    else {
      return (
          <div>
            
          </div>
      );
  }
//    })
   
// )
  }
}
OtherNote.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(style)(OtherNote);
