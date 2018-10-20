import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import addUser from "../icons/addUser.svg";
class Collaborator extends Component{
    render(){
        return(
            <div>
            <IconButton aria-label="Collaborator" style={{marginTop:-57, marginLeft:40}}>
              <img style={{width: 17}} src={addUser} alt="collaborator" />
            </IconButton>
            </div>
        )
    }
}
export default Collaborator;