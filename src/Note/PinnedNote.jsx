import React, { Component } from 'react';
import NoteController from "../controller/NoteController";
import IconButton from "@material-ui/core/IconButton";
import BluePin from '../images/BluePin.svg';
import Card from "@material-ui/core/Card";
import Icons from '../Note/Icons';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import Chip from '@material-ui/core/Chip';


var noteCtrl = new NoteController();

class PinnedNote extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      title: "",
      description: "",
      image:"",
      notes: [],
      labels:[],
      

    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState({
      open: !this.state.open,
    })
  }

   
  handleClose = () => {
    this.setState({ open: false });
  };
componentDidUpdate(prevProps){
  var note=this.props.getData;
  image:note.image
}
updateNote() {
  var note = this.props.getData;
  const noteObj = {
    id: note.id,
    title: this.state.title,
    description: this.state.description,
    pin: note.pin,
    trash: note.trash,
    archive: note.archive,
    createdAt: note.createdAt,
    lastupdatedat: note.lastupdatedAt,
    color: note.color,
    user: note.user
  }
  noteCtrl.updateNote(noteObj)
}
  componentDidMount() {
    var self = this;

    noteCtrl.getAllLabel(function (labelDetails) {
     
        if (labelDetails !== null && labelDetails !== undefined) {
            self.setState({
                labels: labelDetails
            });
        }
        else {
            self.setState({
                labels: []
            });
        }
    });
}

  render() {
     
    var pinnedNotes = [];
    var note=this.props.getData;
      pinnedNotes.push(note);
     localStorage.setItem('pinnedNotes',pinnedNotes.length);
    console.log(note)
     if(note.pin===true ){   
    return(

          // Object.values(this.state.labels).map((label,i)=>{
          //  var labelName = label;  
       
      
        
     <div>
           <Dialog  
             open={this.state.open}
             onClose={this.handleClose}
             aria-labelledby="form-dialog-title"
             fullWidth
           >
     
             <DialogContent style={{ overflowY: "hidden" }}>
     
               <div ><input type="text" style={{ outline: 'none', border: 0 }} defaultValue={note.title} onChange={event => this.setState({ title: event.target.value })} />
                 <IconButton style={{ float: 'right', marginTop: -10 }}>
                   <img src={BluePin} alt="pin" />
                 </IconButton>
               </div>
     
               <div style={{ marginTop: 5 }}><input type="text" style={{ outline: 'none', border: 0 }} defaultValue={note.description} onChange={event => this.setState({ description: event.target.value })} />
               </div>
     
               <div style={{
                 marginTop: 63,
                 marginBottom: -124,
                 marginRight: -10,
               }}>
                 <Icons fetchData={note} />
             </div>
             </DialogContent>
     
             <DialogActions>
              
                 <Button onClick={() => {
                 this.handleClose();
                 this.updateNote();
               }} 
               color="primary" style={{ marginTop: -55 }}>
                 CLOSE
               </Button>  
             </DialogActions>
           </Dialog>
     
     
           <Card className="dashboard"  style={{
             backgroundColor: note.color,
             width:240,
             marginTop:30,
             marginRight:80,
   

           }} >
           
             <div style={{
               marginTop: 10,
               marginLeft: 10
             }}>{note.title}
               <IconButton style={{ float: "right", marginTop: -12 }} onClick={() => noteCtrl.isPinned(note)}><img id="bluepin" src={BluePin} alt="pin" />
            
            <img src ={note.image} alt="images"/></IconButton>
             </div>
          
     
             <div style={{
               marginTop: 10,
               marginLeft: 10
             }} onClick={this.handleClick}>{note.description}
             </div>
     
             {/* <div>
             if(labelName!==null){
               <Chip 
               label={labelName.name}
               onDelete={() => noteCtrl.deleteLabelOnNote(labelName,note)}
               style={{ borderRadius: 50, height: 24, marginLeft: 10, fontSize: 11 }}
               />
               }
          
             </div> */}
            
             <Icons data={note} />
     
             
           </Card>
          
           </div>
         
     
            // })
             )
  
          }
        }
  }  


export default PinnedNote;
