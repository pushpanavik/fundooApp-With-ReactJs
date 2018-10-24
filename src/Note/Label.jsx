import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import labe from  '../images/labe.svg'
import Dialog from '@material-ui/core/Dialog';
import { DialogContent,DialogActions } from '@material-ui/core';
import plus from '../images/plus.svg';
import IconButton from '@material-ui/core/IconButton';
import Cross from '../images/Cross.svg';
class Label extends Component{
    constructor(props){
        super(props);
      this.state={
        open:false,
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
      
    render(){
        return(
            <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
          style={{
            width: '100%',
          }}
        >
        <DialogContent style={{overflowY:"hidden"}}>
          <div className="labelDialog">Edit labels</div>
        <br/>
         <IconButton><img src={plus} alt="plus"/></IconButton> <input style={{border:'none',outline:'none'}} type="text" placeholder="Create new label" aria-label="Create new label" maxLength="50"></input>
         <img src={Cross} alt="cross"/>
        </DialogContent>
        <DialogActions>
            <Button  onClick={() => {
                  this.handleClose();
                }} color="primary" style={{marginTop:-55}}>
              CLOSE
            </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
          </DialogActions>
        </Dialog>
            <Button onClick={this.handleClick} className="sidebarBtn" style={{width:71,marginLeft:176}}>
                            <img style={{width:30, height:30,marginLeft:-353}} src={labe} alt="Label"  className="" />
                            </Button>
                            <span style={{marginLeft:-153}}> Label</span>
                            <span   style={{marginLeft:70}}>EDIT</span>
            </div>
        )
    }
} 

export default Label;