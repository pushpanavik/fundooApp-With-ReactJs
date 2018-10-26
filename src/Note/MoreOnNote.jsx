import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import morevert from "../icons/morevert.svg";
import Menu from '@material-ui/core/Menu';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NoteController from '../controller/NoteController';
var noteCtrl = new NoteController();
class MoreOnNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
            isLabelled:false,
        }
        this.handleClickLabel = this.handleClickLabel.bind(this);
        this.handleCloseLabel = this.handleCloseLabel.bind(this);
    }

    OnOpen = () => {
        this.setState({
            open: true,
        })
    }
    onClose = () => {
        this.setState({
            open: false,
        })
    }
    handleClickLabel(event) {
        this.setState({
            anchorElAddLabel: event.currentTarget
        });
    }
    handleCloseLabel() {
        this.setState({ anchorElAddLabel: null });
    }

    handleClick = e => {
        this.setState({ anchorEl: e.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        var self = this;
        noteCtrl.getAllLabel(function (labelDetails) {
            if (labelDetails !== null && labelDetails !== undefined) {
                self.setState({
                    labels: labelDetails
                });
            }
            else {
                self.setState({
                    labels: []
                });
            }
        });
    }

    addLabelOnNote(note,label){
       if(this.state.isLabelled===false){
          this.setState({
              isLabelled:!this.state.isLabelled
          })
           noteCtrl.addLabelOnNote(note,label);
       }
       else{
        this.setState({
            isLabelled:false
        })
           noteCtrl.deleteLabelOnNote(note,label);
       }
        
    }
    render() {
        const { anchorEl } = this.state;
        const { open } = this.state;
        const { anchorElAddLabel } = this.state;
        var note = this.props.getnote;

        return (
            <div>
                <IconButton aria-label="More Vert" style={{ marginTop: -207, marginLeft: 199 }}
                    aria-owns={open ? 'moreMenu' : null}
                    aria-haspopup="true"
                    onClick={(event) => this.handleClick(event)}
                >
                    <img style={{ width: 17 }} src={morevert} alt="more" />
                </IconButton>
                <Menu id="moreMenu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}>
                    <MenuItem onClick={(event) => {
                        this.handleClick(event); noteCtrl.isTrashNote(note);
                        this.handleClose()
                    }}>Delete note</MenuItem>

                    <MenuItem aria-owns={anchorElAddLabel ? 'simple-menu-add-label' : null}
                        aria-haspopup="true"
                        onClick={this.handleClickLabel}>Add label</MenuItem>
                </Menu>


                <Menu
                    id="simple-menu-add-label"
                    anchorEl={anchorElAddLabel}
                    open={Boolean(anchorElAddLabel)}
                    onClose={this.handleCloseLabel}
                >
                    <div style={{marginLeft:10}}>Label note</div>
                    <Input
                        id="label-search"
                        disableUnderline={true}
                        type="text"
                        placeholder="Enter label name"
                        style={{
                            marginLeft:10
                        }}
                    />
                    {this.state.labels && Object.values(this.state.labels).map((label,i) => {
                                             
                        var labelName = label;
                        return (
                            <div key={i} style={{marginLeft:10}}>
                                <FormControlLabel
                                    id="add-label-note"
                                    control={
                                        <Checkbox
                                            style={{ width: 36, height: 36, padding: 5 ,marginLeft:10}}
                                            icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
                                            checkedIcon={<CheckBoxIcon style={{ fontSize: 20 }} />}
                                            key={i}
                                            color="default"
                                            onClick={() => this.addLabelOnNote(note, labelName)}
                                        />
                                    }
                                    
                                    label={labelName.name}
                                    
                                />
                            </div>
                        );
                    })
                    }
                    
                </Menu>
            </div>
        )
    }
}
export default MoreOnNote;