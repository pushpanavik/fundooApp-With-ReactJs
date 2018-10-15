import React, { Component } from "react";

import PinnedNote from './PinnedNote';
import OtherNote from './OtherNote';


class DisplayCard extends Component {

  render() {  

    var note=this.props.getDataFromParent;
    if(note.pin===true){
      return(
             
              <PinnedNote getData={note} /> 
             
            );
  }
  else{
    if (note.pin === false && note.archive === false && note.trash === false) {
      return(
       
       <OtherNote getData={note}/>
     
      );
  }
}
    
}

}

export default DisplayCard;
