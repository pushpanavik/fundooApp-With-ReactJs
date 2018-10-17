import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import image from "../icons/image.svg";
import pin from "../icons/pin.svg";
import reminders from "../icons/reminders.svg";
import addUser from "../icons/addUser.svg";
import color from "../icons/color.svg";
import unarchive from "../icons/unarchive.svg";
import morevert from "../icons/morevert.svg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Home from "../user/Home";
import NoteController from "../controller/NoteController";
var noteCtrl = new NoteController();
const style = {
  pinIcon: {
    marginLeft: 246,
    marginTop: -41
  }
};
class ArchiveNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      anchorEl: null
    };
  }
  componentDidMount() {
    var self = this;
    noteCtrl.getNotes(function(notesList) {
      self.setState({ notes: notesList });
    });
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    var noteKey, note;
    const { anchorEl } = this.state;
    return Object.values(this.state.notes).map(function(value,i){
     
      note = value;

      if (note.isArchive === true) {
        return (
          <div>
            <Home />

            <Card style={{top: 0,
    left: 0,
    height: 100,
    width: 250,
    backgroundColor:note.color}}>
              <div>
                
                {note.title}
                <IconButton
                  className={this.props.button}
                  aria-label="Pin"
                  style={style.pinIcon}
                  onClick={() => noteCtrl.isPinNote(note)}
                >
                  <img src={pin} alt="pin" />
                </IconButton>
              </div>
              <div>{note.description}</div>
              <div>
                <div>
                  <IconButton
                    className={this.props.button}
                    aria-label="Reminder"
                  >
                    <img src={reminders} alt="reminders" />
                  </IconButton>

                  <IconButton
                    className={this.props.button}
                    aria-label="Collaborator"
                  >
                    <img src={addUser} alt="collaborators" />
                  </IconButton>

                  <IconButton className={this.props.button} aria-label="Color">
                    <img src={color} alt="color" />
                  </IconButton>

                  <IconButton className={this.props.button} aria-label="image">
                    <img src={image} alt="image" />
                  </IconButton>

                  <IconButton
                    className={this.props.button}
                    aria-label="Archive"
                    onClick={() => noteCtrl.isArchiveNote(note)}
                  >
                    <img src={unarchive} alt="archive" />
                  </IconButton>
                  <IconButton
                    className={this.props.button}
                    aria-label="More Vert"
                    aria-owns={this.state.anchorEl ? "menu" : null}
                    aria-haspopup="true"
                    onClick={event => this.handleClick(event)}
                  >
                    <img src={morevert} alt="menu" />
                  </IconButton>
                  <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem
                      onClick={event => {
                        this.handleClick(event);
                        noteCtrl.isTrashNote(noteKey, note);
                        this.handleClose();
                      }}
                    >
                      Delete note
                    </MenuItem>
                    <MenuItem onClick={this.handleClose}>Add label</MenuItem>
                  </Menu>
                </div>
              </div>
            </Card>
          </div>
        );
      }
    });
  }
}

export default ArchiveNotes;
