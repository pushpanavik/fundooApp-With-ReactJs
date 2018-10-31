import React, { Component } from "react";

import PinnedNote from '../Note/PinnedNote';
import OtherNote from "./OtherNote";

class DisplayCard extends Component {
 state={
   pin:false,
   color:""
 }
 updateNoteData=(note)=>{
   console.log('comes in parent');
   this.setState({
     pin:note.pin,
     color:note.color
   })
 }
 updateUpinNote=(note)=>{
   console.log('comes from unpin parnt');
   this.setState({
     pin:note.pin
   })
 }
  render() {
  
    var note=this.props.getDataFromParent;
  
    localStorage.setItem('noteInfo',JSON.stringify(note));
    
    if (note.pin === true &&
      note.trash===false &&
      note.archive===false) {
             
      return (
   
        <div >  
           <PinnedNote takeNoteData={this.updateNoteData.bind(this,note)} getData={note} />
        </div>
      );
    } else if(note.pin===false &&
      note.trash===false &&
      note.archive===false){
      return (
        <div>
        
          <OtherNote takeNoteDataFromUnpin={this.updateUpinNote.bind(this,note)} style={{marginTop:400}} getData={note}/>
        </div>
      );
    }
    return(
      <div></div>
    )
  
  }
}

export default DisplayCard;
