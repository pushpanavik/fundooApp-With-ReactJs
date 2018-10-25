import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import labe from  '../images/labe.svg'
import Dialog from '@material-ui/core/Dialog';
import { DialogContent,DialogActions, } from '@material-ui/core';
import plus from '../images/plus.svg';
import NoteController from '../controller/NoteController';
import tick from '../images/tick.svg';
// import Cross from '../images/Cross.svg';
import DisplayLabelsOnDialog from './DisplayLabelsOnDialog';
var noteCtrl=new NoteController();
 


class Label extends Component{
    constructor(props){
        super(props);

      this.state={
        open:false,
        labelname:'',
        labels: [],
      }
      this.handleClick=this.handleClick.bind(this);
     
    }
    handleClick(){
      this.setState({
          open:!this.state.open,
      })
    }
    handleClose = () => {
      this.setState({ open: false });
    };
  
  addLabelOnSidebar(){
    noteCtrl.addLabelOnSidebar(this.state.labelname);
  } 
  componentDidMount(){
    var self=this;
    noteCtrl.getAllLabel(function(listofLabels){
      if(listofLabels!== null){
        self.setState({
            labels:listofLabels
        })
      }
      else{
        self.setState({
          label:[]
        })
      }
      
    })
  }   
    render(){
    
            return (  
              <div>                                 
                      <Button onClick={()=>{
                        this.handleClick();
                        
                      }}
                       className="sidebarBtn" style={{width:71,marginLeft:176}}>
                                      <img style={{width:30, height:30,marginLeft:-353}} src={labe} alt="Label"/>
                                      </Button>
                                      <span style={{marginLeft:-153}}> Label</span>
                                      <span style={{marginLeft:70}}>EDIT</span>
                      
                    <div>
                    <Dialog
                      open={this.state.open}
                      onClose={this.handleClose}
                      aria-labelledby="form-dialog-title"
                      maxWidth='xs'
                      style={{
                          height:500
                      }}
                      
                    >
                    <DialogContent style={{overflowY:"hidden"}}>
                      <div className="labelDialog">Edit labels</div>
                   
                     <img style={{marginRight:4,marginBottom:-9,width:30,height:30,borderBottom:'1 solid'}} src={plus} alt="plus"/>
                    <input style={{border:'none',outline:'none'}} onChange={e => this.setState({ labelname: e.target.value })} 
                    type="text" placeholder="Create new label" aria-label="Create new label" maxLength="50"></input>
                    
                     {/* <img style={{width:30, height:30}} src={Cross} alt="cross"/> */}
                     <img style={{width:30, height:30,marginBottom:-5,marginLeft:49,opacity:0.5}} src={tick} alt="tick"/>
            
                     <DisplayLabelsOnDialog/>
                    
                     <div>
                    <input style={{border:'none',outline:'none'}} type="text"  aria-label="Create new label" maxLength="50"></input>
                     </div>
                   
                     
                    </DialogContent>
                    <DialogActions>
                        <Button  onClick={() => {
                              this.handleClose();
                              this.addLabelOnSidebar();
                            }} color="primary" style={{marginTop:-55}}>
                          DONE
                        </Button>
                     
                      </DialogActions>
                    </Dialog>
                    </div>  
                    </div>   
    );
                 
    }
} 

export default Label;