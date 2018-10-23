import React, {Component} from "react";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import NoteController from "../controller/NoteController";
var noteCtrl=new NoteController();
class OtherNoteColor extends Component {

    handleClose = () => {
        this.setState({ anchorEl: null
         });
    };

    changeColor(data,btn){
        noteCtrl.changeColor(data,btn);
    }
   
  render() {
      var data =this.props.fetchData;
      
    return (
      <div>
        <IconButton
          id="color-btn"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            this.handleClose();
            this.changeColor(data, 1);
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
              this.changeColor(data, 2);
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
              this.changeColor(data, 3);
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
              this.changeColor(data, 4);
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
              this.changeColor(data, 5);
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
              this.changeColor(data, 6);
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
              this.changeColor(data, 7);
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
              this.changeColor(data, 8);
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
              this.changeColor(data, 9);
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
              this.changeColor(data, 10);
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
              this.changeColor(data, 11);
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
              this.changeColor(data, 12);
            }}
          >
            <div
              className="color-change-div"
            
            />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}
export default OtherNoteColor;
