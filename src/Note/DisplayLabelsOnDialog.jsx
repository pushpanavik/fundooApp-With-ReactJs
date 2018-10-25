import React, { Component } from 'react';
import labe from  '../images/labe.svg'
import pen from '../images/pen.svg';
import Delete from '../images/Delete.svg';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import NoteController from '../controller/NoteController'
const noteCtrl = new NoteController();

class DisplayLabelsOnDialog extends Component {
    constructor() {
        super();

        this.state = {
            labels: [],
            label: null,
            labelname:'',
            img: labe,
            opacity: 0.5,
            opacity1: 0.5
        }
    }

    componentDidMount() {
        var self = this;
        noteCtrl.getAllLabel(function (listofLabels) {
            if (listofLabels !== null) {
                self.setState({
                    labels: listofLabels
                })
            }
            else {
                self.setState({
                    label: []
                })
            }

        })
    }

    deleteLabel(data) {
        noteCtrl.deleteLabel(data);
    }

    editLabel(name,data) {
        noteCtrl.editLabel(name,data);
    }

    render() {
        return (
            Object.keys(this.state.labels).map((label) => {
                var key = label;
                var data = this.state.labels[key];
               
                if (data !== null) {
                    return (
                        <div className="labelondialog" >
                            <IconButton color="inherit" aria-label="labels" id="deletelabelbtn" onClick={() => this.deleteLabel(data)}>
                                <img src={Delete} alt="deleteicon" style={{ opacity: this.state.opacity }}
                                    onMouseEnter={() => {
                                        this.setState({
                                            img: Delete,
                                            opacity: 1
                                        })
                                    }}

                                    onMouseOut={() => {
                                        this.setState({
                                            img: labe,
                                            opacity: 0.5
                                        })
                                    }}
                                />
                                 
                            </IconButton>
                           
                            <Input
                                id="editlabeldata"
                                disableUnderline={true}
                                type="text"
                                defaultValue={data.name}
                                onInput={e => this.setState({ label: e.target.value })}
                            />
                            <IconButton color="inherit" aria-label="labels"  onClick={() => this.editLabel(this.state.label,data)}>
                                <img src={pen} alt="editlabel"  style={{ opacity: this.state.opacity }}
                                    onMouseEnter={() => {
                                        this.setState({
                                            opacity1: 1
                                        })
                                    }}

                                    onMouseOut={() => {
                                        this.setState({
                                            opacity1: 0.5
                                        })
                                    }}
                                />
                            
                            </IconButton>
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

export default DisplayLabelsOnDialog;