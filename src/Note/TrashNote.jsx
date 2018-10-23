import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import more from '../icons/morevert.svg';
import NoteController from '../controller/NoteController.js';


const noteCtrl = new NoteController();


class TrashNotes extends Component {
  constructor() {
    super();

    this.state = {
      anchorEl: null,
      notes: [],
      isPin: false
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  componentDidMount() {
    var self = this;
    console.log("inside displaynotes");
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

  isTrashNote(data) {
    console.log("Inside Trash");
    noteCtrl.isTrashNote( data);
  }

  deleteForever(data) {
    console.log("Inside delete");
    noteCtrl.deleteNoteForever(data);
  }

  render() {
    const { anchorEl } = this.state;
   
    return (
      Object.keys(this.state.notes).map((note) => {
        var key = note;
        var data = this.state.notes[key];
        if (data.trash === true && data.pin === false) {
          return (
            <div>
             
              <div> 
  
                <Card style={{ width: 240, backgroundColor: data.color,marginLeft:350,marginRight:150,marginTop:170}}>
                  <div >
                    <div style={{ height: 38, width: 210, marginTop: 10, marginLeft: 10, fontWeight: 'bolder', position: 'relative' }}>
                      {data.title}
                    </div>
                  </div>

                  <div style={{ width: 240, marginLeft: 10, marginBottom: 10 }}>{data.description}</div>

                  <div style={{ width: 240, height: 40 }}>
                    <IconButton name={note.key} color="primary" id="notebuttons"
                      aria-owns={anchorEl ? 'simple-menu' : null}
                      aria-haspopup="true"
                      onClick={this.handleClick}
                    >
                      <img src={more} alt="more" id="noteicons" />
                    </IconButton>

                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={this.handleClose}
                    >
                      <MenuItem id="menuitems" onClick={() => { this.handleClose(); this.deleteForever(data) }}>Delete forever</MenuItem>
                      <MenuItem id="menuitems" onClick={() => { this.handleClose(); this.isTrashNote( data) }}>Restore</MenuItem>
                    </Menu>
                  </div>
                </Card>
              </div>
            </div>
          );
        } else {
          return (
            <div>
            </div>
          )
        }
      })
    );
  }
}

export default TrashNotes;