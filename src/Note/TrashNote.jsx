import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import pin from "../icons/pin.svg";
import image from "../icons/image.svg";
import reminders from "../icons/reminders.svg";
import addUser from "../icons/addUser.svg";
import color from "../icons/color.svg";
import archive from "../icons/archive.svg";
import morevert from "../icons/morevert.svg";
import Menu from '@material-ui/core/Menu';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Card from '@material-ui/core/Card';
import NoteController from "../controller/NoteController";
import Home from "../user/Home";
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
class TrashNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      notes:[]
    };
  }
 
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  changeColor(data,btn){
    noteCtrl.changeColor(data,btn);
  }
  componentDidMount() {
    var other=this;
    noteCtrl.getUserNote(function(noteDetails){
      other.setState({
         notes: noteDetails });
  });
  }
  render() {
    const { classes } = this.props;
    const { anchorEl } =this.state;
        const { open } = this.state;
    var note;
     console.log(this.state.notes);
   var listItems =Object.values(this.state.notes).map(function(value,i) {
    note=value;
       return(
        <div style={{marginTop:20}}  key={i}>
       {note}>
        </div>
         
     
       )
      });
if(note.trash===true && note.pin===false  ){
return( 
  <div style={{
    marginTop:55,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
    marginLeft:250,
    marginRight:250,
    
  }}
  > {listItems}
           
           <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
          >
           
            <DialogContent>
              
             <div ><input type="text"  style={{outline:'none',border:0}} defaultValue={note.title} onChange={event =>this.setState({title:event.target.value})} />
             <IconButton style={{float:'right',marginTop: -10}}>
               <img src={pin}  alt="pin"/>
             </IconButton>
             </div>
  
             <div style={{marginTop:5}}><input type="text"  style={{outline:'none',border:0}} defaultValue={note.description} onChange={event =>this.setState({description:event.target.value})} />
             </div>
            
            <div style={{
              marginTop: 63,
              marginBottom:-23,
              marginRight: -10,
            }}>
            <div>
            <IconButton aria-label="Reminder">
              <img className={classes.img} src={reminders} alt="reminders" />
            </IconButton>
    
            <IconButton aria-label="Collaborator">
              <img className={classes.img} src={addUser} alt="collaborator" />
            </IconButton>
         
            <IconButton className="change-color-btn"
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
                   <div>
        <IconButton
          id="color-btn"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            this.handleClose();
            this.changeColor(note, 1);
          }}
        >
          <div
            className="color-change-div"
          />
        </IconButton>
       
        <Tooltip title="Red">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(255, 138, 128)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 2);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Orange">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(255, 209, 128)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 3);
            }}
          >
            <div
              className="color-change-div" 
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Yellow">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(255, 255, 141)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 4);
            }}
          >
            <div
              className="color-change-div"
             
            />
          </IconButton>
        </Tooltip>
        <br />
        <Tooltip title="Green">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(204, 255, 144)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 5);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Teal">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(167, 255, 235)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 6);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Blue">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(128, 216, 255)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 7);
            }}
          >
            <div
              className="color-change-div"
            
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Dark blue">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(130, 177, 255)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 8);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <br />
        <Tooltip title="Purple">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(179, 136, 255)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 9);
            }}
          >
            <div
              className="color-change-div"
             
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Pink">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(248, 187, 208)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 10);
            }}
          >
            <div
              className="color-change-div"
             
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Brown">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(215, 204, 200)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 11);
            }}
          >
            <div
              className="color-change-div"   
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Gray">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(207, 216, 220)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 12);
            }}
          >
            <div
              className="color-change-div"
            />
          </IconButton>
        </Tooltip>
      </div>
                   
            </Menu>
      
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
            </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onClose} color="primary" style={{marginTop:-55}}>
                CLOSE
              </Button>
            </DialogActions>
          </Dialog>
       
<Card className="dashboard"   style={{top: 0,
    left: 0,
    height: 100,
    width: 250,
    backgroundColor:note.color}}>

      <div style={{marginTop:10,
      marginLeft:10}}>{note.title} 
      <IconButton style={{float:"right",marginTop:-12}} onClick={() => noteCtrl.isPinned(note)}><img id="otherpin" src={pin} alt="pin"/></IconButton>      </div>
      
      <div style={{marginTop:10,
      marginLeft:10}} onClick={this.handleClick}>{note.description} 
      </div>
      
      <div>
            <IconButton aria-label="Reminder">
              <img className={classes.img} src={reminders} alt="reminders" />
            </IconButton>
    
            <IconButton aria-label="Collaborator">
              <img className={classes.img} src={addUser} alt="collaborator" />
            </IconButton>
         
            <IconButton className="change-color-btn"
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
                   <div>
        <IconButton
          id="color-btn"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            this.handleClose();
            this.changeColor(note, 1);
          }}
        >
          <div
            className="color-change-div"
          />
        </IconButton>
       
        <Tooltip title="Red">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(255, 138, 128)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 2);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Orange">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(255, 209, 128)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 3);
            }}
          >
            <div
              className="color-change-div" 
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Yellow">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(255, 255, 141)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 4);
            }}
          >
            <div
              className="color-change-div"
             
            />
          </IconButton>
        </Tooltip>
        <br />
        <Tooltip title="Green">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(204, 255, 144)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 5);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Teal">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(167, 255, 235)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 6);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Blue">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(128, 216, 255)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 7);
            }}
          >
            <div
              className="color-change-div"
            
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Dark blue">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(130, 177, 255)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 8);
            }}
          >
            <div
              className="color-change-div"
              
            />
          </IconButton>
        </Tooltip>
        <br />
        <Tooltip title="Purple">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(179, 136, 255)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 9);
            }}
          >
            <div
              className="color-change-div"
             
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Pink">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(248, 187, 208)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 10);
            }}
          >
            <div
              className="color-change-div"
             
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Brown">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(215, 204, 200)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 11);
            }}
          >
            <div
              className="color-change-div"   
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Gray">
          <IconButton
            id="color-btn"
            style={{ backgroundColor: "rgb(207, 216, 220)" }}
            onClick={() => {
              this.handleClose();
              this.changeColor(note, 12);
            }}
          >
            <div
              className="color-change-div"
            />
          </IconButton>
        </Tooltip>
      </div>
                   
            </Menu>
            
            <IconButton aria-label="image">
              <img className={classes.img} src={image} alt="images" />
            </IconButton>
    
            <IconButton aria-label="Archive">
              <img className={classes.img} src={archive} alt="archive" />
            </IconButton>
    
            <IconButton aria-label="More Vert">
              <img className={classes.img} src={morevert} alt="more" />
            </IconButton>
           
            </div>
          
      </Card>

</div>
   
  
 )
}
else{
   return (
     <div> <Home/> </div>
   );
}
}
}
TrashNote.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default  withStyles(style)(TrashNote);
