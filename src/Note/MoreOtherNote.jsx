import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import morevert from "../icons/morevert.svg";
import Menu from '@material-ui/core/Menu';
import CheckedIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import NoteController from '../controller/NoteController';
var noteCtrl = new NoteController();
class MoreOtherNote extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null,
            open: false,
        }

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

    render() {
        const { anchorEl } = this.state;
        const { open } = this.state;

        var note = this.props.data;

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
                    <MenuItem onClick={(event) => { this.handleClick(event); noteCtrl.isTrashNote(note); this.handleClose() }}>Delete note</MenuItem>
                    <MenuItem onClick={this.handleClose}>Add label</MenuItem>

                    {this.state.labels && Object.values(this.state.labels).map((label, i) => {

                        var labelName = label;
                        return (
                            <div key={i} style={{ marginLeft: 10 }}>
                                <FormControlLabel
                                    id="add-label-note"
                                    control={
                                        <Checkbox
                                            style={{ width: 36, height: 36, padding: 5, marginLeft: 10 }}
                                            icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
                                            checkedIcon={<CheckedIcon style={{ fontSize: 20 }} />}
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
export default MoreOtherNote;