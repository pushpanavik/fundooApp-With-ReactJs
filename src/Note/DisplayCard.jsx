import React, { Component } from "react";

import PinnedNote from "./PinnedNote";
import OtherNote from "./OtherNote";



class DisplayCard extends Component {
  render() {
    var note = this.props.getDataFromParent;
    console.log(note);
    
    if (note.pin === true &&
      note.trash===false &&
      note.archive===false) {
      return (
        
        <div>
          
          <PinnedNote  getData={note} /> 
         
        </div>
      );
    } else {
      return (
        <div>
          <OtherNote  getData={note}/>
        
        </div>
      );
    }
  
  }
}

export default DisplayCard;
