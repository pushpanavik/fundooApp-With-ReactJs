import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import pin from "../icons/pin.svg";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Reminder from '../Note/Reminder';
import Menu from '@material-ui/core/Menu';
import ImageOnNote from '../Note/ImageOnNote';
import color from '../icons/color.svg';
import Collaborator from '../Note/Collaborator';
import unarchive from '../icons/unarchive.svg';
 import Button from '@material-ui/core/Button';
 import Dialog from '@material-ui/core/Dialog';
 import DialogActions from '@material-ui/core/DialogActions';
 import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import NoteController from "../controller/NoteController";
import OtherNoteColor from '../Note/OtherNoteColor';
import MoreOtherNote from '../Note/MoreOtherNote'

var noteCtrl=new NoteController();
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
class ArchiveNote extends Component {
  constructor(){
    super();
  this.state={
    open:false,
    title:"",
    description: "",
    notes:[]
    
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
    this.setState({ anchorEl: e.currentTarget });
};

handleClose = () => {
    this.setState({ anchorEl: null });
};

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}


updateNote(){
  // var note=this.props.getData;
  // const noteObj = {
  //   id:note.id,
  //   title: this.state.title,
  //   description: this.state.description,
  //   pin:note.pin,
  //   trash:note.trash,
  //   archive:note.archive,
  //   createdAt:note.createdAt,
  //   lastupdatedat:note.lastupdatedAt,
  //   color:note.color,
  //   user:note.user
//}
  //noteCtrl.updateNote(noteObj)
}
componentDidMount() {
  var self = this;
  noteCtrl.getUserNote(function (noteDetails) {
      if (noteDetails !== null && noteDetails !== undefined) {
          self.setState({
              notes: noteDetails
          });
      }
      else {
          self.setState({
              notes: []
          });
      }
  });
}
    render(){
      const { anchorEl } =this.state;
        const { open } = this.state;
        const { classes } = this.props;
        console.log('note info from other note',this.state.notes)
      
        return (
          Object.keys(this.state.notes).map((item) => {
              var key = item;
              var note = this.state.notes[key];

            if(note.archive===false && note.pin===false){
              return(

            <Dialog
             open={this.state.open}
             onClose={this.handleClose}
             aria-labelledby="form-dialog-title"
             fullWidth
          > 
            <DialogContent style={{overflowY:"hidden"}}>
              
             <div ><input type="text"  style={{outline:'none',border:0}} defaultValue={note.title} onChange={event =>this.setState({title:event.target.value})} />
             <IconButton style={{float:'right',marginTop: -10}}>
               <img src={pin}  alt="pin"/>
             </IconButton>
             </div>
  
             <div style={{marginTop:5}}><input type="text"  style={{outline:'none',border:0}} defaultValue={note.description} onChange={event =>this.setState({description:event.target.value})} />
             </div>
            
            <div style={{
              marginTop: 63,
              marginBottom:-124,
              marginRight: -10,
            }}>
           
           <div>
           <Reminder/>
            
           <Collaborator/>
           
            
            <IconButton className="change-color-btn" style={{marginTop:-96,marginLeft:80}}
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
                   <OtherNoteColor fetchData={note}/>      
            </Menu>

            <div>
                <ImageOnNote getnote={note}/>
            </div>

          <IconButton onClick={()=>noteCtrl.isArchiveNote(note)} style={{marginTop:-174, marginLeft:160}} aria-label="Archive">
              <img className={classes.img} src={unarchive} alt="unarchive" />
            </IconButton>

            <div>
                <MoreOtherNote getnote={note}/>
            </div>
            </div>
            </div>
            
            </DialogContent>
            <DialogActions>
            <Button  onClick={() => {
                  this.handleClose();
                }}  style={{marginTop:-55}}>
              CLOSE
            </Button>
            </DialogActions>
          </Dialog> 
         
              )
            }            
           
if (note.archive === true && note.pin === false) {
return(          
<Card   style={{
   height:100,  
    width: 250,
    marginLeft:350,
    marginRight:150,
    marginTop: 150,
    backgroundColor:note.color
  }}>

      <div style={{marginTop:10,
      marginLeft:10}}>{note.title} 
      <IconButton style={{float:"right",marginTop:-12}} onClick={() => noteCtrl.isPinned(note)}><img id="otherpin" src={pin} alt="pin"/></IconButton>      </div>
      
      <div style={{marginTop:10,
      marginLeft:10}} onClick={this.handleClick}>{note.description} 
      </div>
      
      <div>
           <Reminder/>

            <div>
           <Collaborator style={{marginTtop:-56,
    marginLeft: 40}}/>
            </div>
            <IconButton className="change-color-btn" style={{marginTop:-96,marginLeft:80}}
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
                   <OtherNoteColor fetchData={note}/>      
            </Menu>

            <div>
                <ImageOnNote getnote={note}/>
            </div>

          <IconButton onClick={()=> noteCtrl.isArchiveNote(note)} style={{marginTop:-174, marginLeft:161}} aria-label="Unarchive">
              <img className={classes.img} src={unarchive} alt="unarchive" />
            </IconButton>

            <div>
                <MoreOtherNote style={{marginTop: -207,
    marginLeft: 199}} getnote={note}/>
            </div>
            </div>
         
      </Card>      
      )  
      }else{
        return(
          <div></div>
        )
      }
    })
  )
  }
}
ArchiveNote.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default  withStyles(style)(ArchiveNote);




