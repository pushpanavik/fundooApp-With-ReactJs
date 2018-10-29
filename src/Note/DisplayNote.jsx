import React, { Component } from "react";
import NoteController from "../controller/NoteController";
import DisplayCard from '../Note/DisplayCard'


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
     
   var listItems =Object.values(this.state.notes).map(function(value) {
     
    noteKey=value;
      
       return(
         <div key={noteKey.id}>   
          <DisplayCard  getDataFromParent={noteKey}/>
        </div>
         
     
       )
      });

return( 
  
   <div>
   <div style={{
   marginTop:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    marginLeft:60,
  
   
    
  }}>{listItems}
   
  </div> 
  </div>
 )


  }

}
  


export default DisplayNote;
