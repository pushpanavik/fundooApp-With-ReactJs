import React, { Component } from 'react';
import labe from '../images/labe.svg';
import Button from '@material-ui/core/Button';
import NoteController from '../controller/NoteController';

const noteCtrl=new NoteController();

class DisplayLabel extends Component {
    constructor() {
        super();

        this.state = {
            labels: []
        }
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
    render() {
        return (
            Object.values(this.state.labels).map((value,i) => {
               
                var data = value;
                if (data !== null) {
                    return ( 
                        <div key={i}>
                            <Button  color="inherit">
                                <img src={labe} alt="labelicon"/>
                                <div style={{textTransform:'lowercase',marginLeft:58}}>{data.name}</div>
                            </Button>
                            
                        </div>
                       
                    );
                }
                else {
                    return ( 
                        <div>
                        </div>
                    );
                }
            })
        );
    }
}

export default DisplayLabel;