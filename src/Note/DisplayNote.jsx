import React, { Component } from "react";
import NoteController from "../controller/NoteController";
import DisplayCard from "./DisplayCard";

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
     console.log(this.state.notes);
   var listItems =Object.values(this.state.notes).map(function(value,i) {
    console.log(listItems)
    noteKey=value;
    console.log(noteKey);
    
       return(
        <div style={{marginTop:20}}  key={i}>
         <div></div>
          <DisplayCard  getDataFromParent={noteKey}/>
        </div>
         
     
       )
      });

return( 
  <div style={{
    marginTop:55,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
    marginLeft:250,
    marginRight:250,
    
  }}>
    {listItems}
  </div> 
  
 )

}
  
}

export default DisplayNote;
