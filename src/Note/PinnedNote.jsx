import React, { Component } from 'react';
import NoteController from "../controller/NoteController";
import IconButton from "@material-ui/core/IconButton";
import BluePin from  '../images/BluePin.svg';
import Card from "@material-ui/core/Card";
import Icons from '../Note/Icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
var noteCtrl = new NoteController();

class PinnedNote  extends Component{
  constructor(){
    super();
  this.state={
    open:false,
    title:"",
    description: "",
    notes:[]
    
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

    render(){
        var note=this.props.getData;     
                  
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
             <img src={BluePin}  alt="pin"/>
           </IconButton>
           </div>

           <div style={{marginTop:5}}><input type="text"  style={{outline:'none',border:0}} defaultValue={note.description} onChange={event =>this.setState({description:event.target.value})} />
           </div>
          
          <div style={{
            marginTop: 63,
            marginBottom:-23,
            marginRight: -10,
          }}>
          <Icons fetchData={note}/></div>
          </DialogContent>
          <DialogActions>
            <Button  onClick={() => {
                  this.handleClose();
                  this.updateNote();
                }} color="primary" style={{marginTop:-55}}>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
     

    <Card  className="dashboard" style={{top: 0,
    left: 0,
    height:100,
    width: 250,
    backgroundColor:note.color
   }} >
 
      <div style={{marginTop:10,
      marginLeft:10}}>{note.title} 
      <IconButton style={{float:"right",marginTop:-12}} onClick={() => noteCtrl.isPinned(note)}><img  id="bluepin" src={BluePin} alt="pin"/></IconButton>
      </div>
      
      <div style={{marginTop:10,
      marginLeft:10}} onClick={this.handleClick}>{note.description} 
      </div>
      <Icons data={note}/>
     
      </Card>
      </div> 
        );
    }
    
}

export default PinnedNote;
