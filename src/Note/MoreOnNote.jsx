import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import morevert from "../icons/morevert.svg";
import Menu from '@material-ui/core/Menu';
import NoteController from '../controller/NoteController';
var noteCtrl=new NoteController();
class MoreOnNote extends Component{
    constructor(){
        super();
        this.state={
            anchorEl: null,
            open:false,  
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
  
    render(){
        const { anchorEl } =this.state;
        const { open } = this.state;
        var note=this.props.getnote;
        // console.log('from more ption',note)
        return(
            <div>
            <IconButton aria-label="More Vert" style={{marginTop:-207,marginLeft:199}}
            aria-owns={open ? 'moreMenu' : null}
            aria-haspopup="true"
            onClick={(event) => this.handleClick(event)}
           >
             <img style={{width:17}} src={morevert} alt="more" />
           </IconButton>
           <Menu id="moreMenu"
               anchorEl={anchorEl}
               open={Boolean(anchorEl)}
               onClose={this.handleClose}>
               <MenuItem onClick={(event) => { this.handleClick(event); noteCtrl.isTrashNote(note); this.handleClose()}}>Delete note</MenuItem>
               <MenuItem onClick={this.handleClose}>Add label</MenuItem>
               </Menu>
               </div>
        )
    }
}
export default MoreOnNote;