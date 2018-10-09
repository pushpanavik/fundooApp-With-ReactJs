import React, { Component } from 'react';
import image from '../icons/image.svg';
import pen from '../images/pen.svg';
import list from '../icons/list.svg';
import pin from '../icons/pin.svg';
import reminders from '../icons/reminders.svg';
import addUser from '../icons/addUser.svg';
import color from '../icons/color.svg';
import morevert from '../icons/morevert.svg';
import archive from '../icons/archive.svg';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles'; 
import { Collapse } from '@material-ui/core';
import PropTypes from 'prop-types';
import NoteController from '../controller/NoteController';

 var noteControl=new NoteController();

const style = {
    pinIcon: {
        marginLeft: 455,
        marginTop: -65
    },
    closeBtn: {
        marginTop: -70,
        marginLeft: 496
    },
    card: {
        maxWidth: 600,
       
      },
      inputTitle:{
          marginTop:13,
          marginRight:16,
          marginLeft:18,
          border:'none',
          outline:'none,'
      },
      noteDiv:{
        marginTop:-34,
          marginLeft:442,
      }
      ,
      takeNote :{
        border: 'none',
        outline: 'none',
        marginLeft: 10,
      }
}
class Note extends Component{
    constructor(props){
        super(props);
        this.state={
            open: true,
            title:'',
            description : ''
            
      }  
      this.createNote=this.createNote.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }
      handleChange(e){
      
      } 
    createNote(){
       noteControl.addNote(
           this.state.title,this.state.description
       );
        
    }
    handleExpandClick=()=>{
        this.setState({
            open: !this.state.open,
        });
    }
    render(){
        const { classes } = this.props;
        console.log(this.state.title)
        console.log(this.state.description)
        return(
            
            <div>
                  <Collapse in={this.state.open}> 
                    <div className="notefirstCard">
                        <Card  className={classes.card}  style={{maxHeight:50 }}>
                            <input className={classes.inputTitle} type="text"  placeholder="Take a note..." onClick={this.handleExpandClick.bind(this)} />

                            <div className={classes.noteDiv}>
                                <IconButton aria-label="Delete">
                                    <img src={list} alt="list" />
                                </IconButton>
                                <IconButton  aria-label="Delete">
                                    <img src={image} alt="images" />
                                </IconButton>
                                <IconButton  aria-label="edit">
                                    <img src={pen} alt="pen" />
                                </IconButton>
                            </div>
                        </Card>
                    </div>
                </Collapse> 

                <Collapse in={!this.state.open} >
                
                 <Card  className={classes.card} style={{marginLeft:453,marginTop:33}}>
                            <input className={classes.takeNote}  onChange={(event) => this.setState({title : event.target.value})}  type="text" placeholder="Title"/>
                            <IconButton aria-label="Delete" style={{marginLeft:366}}>
                                <img src={pin} alt="pin" /> 
                            </IconButton>
                            <div >
                            <input className={classes.takeNote}  onChange={(event) => this.setState({description : event.target.value})} type="text" placeholder="Take a note..." />
                            </div>
                            <div>
                                <div>
                                    <IconButton  aria-label="Reminder" >
                                        <img src={reminders} alt="reminders" />
                                    </IconButton>

                                    <IconButton  aria-label="Collaborator" >
                                        <img src={addUser} alt="collaborator" />
                                    </IconButton>

                                    <IconButton  aria-label="Color">
                                        <img src={color} alt="color" />
                                    </IconButton>

                                    <IconButton aria-label="image"  >
                                        <img src={image} alt="images" />
                                    </IconButton>

                                    <IconButton aria-label="Archive">
                                        <img src={archive} alt="archive" />
                                    </IconButton>

                                    <IconButton  aria-label="More Vert"  >
                                        <img src={morevert} alt="archive" />
                                    </IconButton>
                                </div>
                                <Button className={classes.closeBtn}  onClick={()=>{this.handleExpandClick();this.createNote()}}>Close</Button>

                            </div>
                        </Card>
                        </Collapse>
                    </div>
           
        )
    }
}
Note.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(style)(Note);