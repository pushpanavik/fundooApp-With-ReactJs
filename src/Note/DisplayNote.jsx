import React, { Component } from "react"; 
import NoteController from "../controller/NoteController";
import DisplayCard from "./DisplayCard";

 var noteCtrl = new NoteController();
 
class DisplayNote extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
      notes: [],
      open: false,
      notettitle: "",
      notedesc: ""
    };
  }
  onOpen = () => {
    this.setState({ open: true });
  };
  onClose = () => {
    this.setState({ open: false });
  };
  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    var other=this;
    noteCtrl.getUserNote(function(noteDetails){
      other.setState({
         notes: noteDetails });
  });
  }


  render() {
   
     console.log(this.state.notes);
   

    // var listItems = this.state.notes.map(function(item) {
    //   return (
    //     <DisplayCard />
    //   );
    //   });

return(  
//  {listItems}
<div></div>
 );

}
  
}

export default DisplayNote;
