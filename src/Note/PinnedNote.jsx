import React, { Component } from 'react';
import NoteController from "../controller/NoteController";
import IconButton from "@material-ui/core/IconButton";
import BluePin from '../images/BluePin.svg';
import Card from "@material-ui/core/Card";
import Icons from '../Note/Icons';
import {Input,Button} from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Menu from '@material-ui/core/Menu';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
var noteCtrl = new NoteController();

class PinnedNote extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      title: "",
      description: "",
      notes: [],
      label:[],

    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState({
      open: !this.state.open,
    })
  }
  handleClickLabel=(event)=> {
    this.setState({
      anchorElAddLabel: event.currentTarget
  });
}
handleCloseLabel=()=> {
  this.setState({ anchorElAddLabel: null });
}
   
  handleClose = () => {
    this.setState({ open: false });
  };

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
componentDidMount(){
  var self=this;
  noteCtrl.getAllLabel(function(getLabels){
    self.setState({
      label:getLabels
    })
  })
}
  render() {
    var labeldata;
    var note = this.props.getData;
    var labelObj=Object.values(this.state.label).map(function(value,i){
      var key=i;
      return(
       <div>
         labeldata=value;
       </div> 
      )
      
    })
  
    const {anchorElAddLabel}=this.state;
    console.log('note info form pinned')
    return (
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
              <Icons fetchData={note} /></div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              this.handleClose();
              this.updateNote();
            }} color="primary" style={{ marginTop: -55 }}>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>


        <Card className="dashboard" style={{
          top: 0,
          left: 0,
          height: 100,
          width: 250,
          backgroundColor: note.color
        }} >

          <div style={{
            marginTop: 10,
            marginLeft: 10
          }}>{note.title}
            <IconButton style={{ float: "right", marginTop: -12 }} onClick={() => noteCtrl.isPinned(note)}><img id="bluepin" src={BluePin} alt="pin" /></IconButton>
          </div>

          <div style={{
            marginTop: 10,
            marginLeft: 10
          }} onClick={this.handleClick}>{note.description}
          </div>
          <Menu
            id="simple-menu-add-label"
            anchorEl={anchorElAddLabel}
            open={Boolean(anchorElAddLabel)}
            onClose={this.handleCloseLabel}
          >
            <div>Label note</div>
            <Input
              id="label-search"
              disableUnderline={true}
              type="text"
              placeholder="Enter label name"
            />
           
                <div>
                  <FormControlLabel
                    id="add-label-note"
                    control={
                      <Checkbox
                        style={{ width: 36, height: 36, padding: 5 }}
                        icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
                        checkedIcon={<CheckBoxIcon style={{ fontSize: 20 }} />}

                        color="default"
                        onClick={() => this.getLabel(labeldata,note)}
                      />
                    }
                    label={labeldata}
                  />
                </div>
              );
            })
            }
          </Menu>
          <Icons data={note} />

          
        </Card>
      </div>
    );
  }

}

export default PinnedNote;
