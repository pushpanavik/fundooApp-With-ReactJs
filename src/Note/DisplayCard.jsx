import React, { Component } from "react";

import PinnedNote from '../Note/PinnedNote';
import OtherNote from "./OtherNote";

class DisplayCard extends Component {
 
  render() {
  
    var note=this.props.getDataFromParent;
  
    localStorage.setItem('noteInfo',JSON.stringify(note));
    
    if (note.pin === true &&
      note.trash===false &&
      note.archive===false) {
             
      return (
   
        <div >  
           <PinnedNote  getData={note} />
        </div>
      );
    } else if(note.pin===false &&
      note.trash===false &&
      note.archive===false){
      return (
        <div>
        
          <OtherNote style={{marginTop:400}} getData={note}/>
        </div>
      );
    }
    return(
      <div></div>
    )
  
  }
}

export default DisplayCard;
