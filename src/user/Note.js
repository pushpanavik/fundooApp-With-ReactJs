import React, { Component } from 'react';
import image from '../icons/image.svg';
import pen from '../images/pen.svg';
import list from '../icons/list.svg';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles'; 
//import { Collapse } from '@material-ui/core';
import PropTypes from 'prop-types';
const style = {
    pinIcon: {
        marginLeft: 455,
        marginTop: -65
    },
    closeBtn: {
        marginTop: -70,
        marginLeft: 410
    },
    card: {
        maxWidth: 500,
        maxHeight: 50,
      },
      inputTitle:{
          marginTop:13,
          marginRight:16,
          marginLeft:18,
          border:'none',
      },
      noteDiv:{
        marginTop:-34,
          marginLeft:350,
      }
}
class Note extends Component{
    constructor(){
        super();
        this.state={
            open: true
        }
        
    }
    handleExpandClick=()=>{
        this.setState({
            open: !this.state.open
        });
    }
    render(){
        const { classes } = this.props;
        return(
            
            <div>
                 {/* <Collapse in={this.state.open}  > */}
                    <div className="notefirstCard">
                        <Card  className={classes.card} >
                            <input className={classes.inputTitle} type="text" placeholder="Take a note..." onClick={this.handleExpandClick.bind(this)} />

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
                {/* </Collapse> */}
            </div>
        )
    }
}
Note.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(style)(Note);