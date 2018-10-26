import React, { Component } from "react";
import NoteController from "../controller/NoteController";
import DisplayCard from "./DisplayCard";
import Note from "./Note";

var noteCtrl = new NoteController();

class DisplayNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      open: false
    };
  }

  componentDidMount() {
    var other = this;
    noteCtrl.getUserNote(function(noteDetails) {
      other.setState({
        notes: noteDetails
      });
    });
  }

  render(){
    var noteKey;
     
   var listItems =Object.values(this.state.notes).map(function(value,i) {
     
    noteKey=value;
      
       return(
         <div key={i}>   
          <DisplayCard  getDataFromParent={noteKey}/>
        </div>
         
     
       )
      });

return( 
  
   <div>
     <Note/>
   <div style={{
   marginTop:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    marginLeft:350,
    marginRight:150,
   
    
  }}>{listItems}
   
  </div> 
  </div>
 )

}
  
}

export default DisplayNote;
