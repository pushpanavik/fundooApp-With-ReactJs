import React, { Component } from 'react';
import Notes from '../icons/Notes.svg';
import reminders from '../icons/reminders.svg';
import labe from '../images/labe.svg';
import archive from '../icons/archive.svg';
import trash from '../images/trash.svg';
import setting from '../images/setting.svg';
import sendFeed from '../images/sendFeed.svg';
import help from '../images/help.svg';
import Button from '@material-ui/core/Button';

class Sidebar extends Component{
    render(){
        return(
            <div>
                <Button  href="" className="sidebarBtn"  style={{'textTransform': 'initial'}}>
                                 <img style={{width:30,height:30,marginRight:148}} src={Notes} alt="notes"   />
                                    Notes
                            </Button>

                                <Button  href="" className="sidebarBtn"  style={{'textTransform': 'initial'}}>
                                    <img style={{width:30, height:30,marginRight:124}}src={reminders} alt="Reminders" className="reminderBtn"/>
                                    Reminders
                            </Button>

                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30,marginRight:144}} src={labe} alt="Archive"  className="" />
                                    Label
                            </Button>
                                <Button href="/home/archive"  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30,marginRight:137}} src={archive} alt="Archive"  className="archiveBtn" />
                                    Archive
                            </Button>
                                <Button href="/home/trash"  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img  style={{width:30, height:30,marginRight:148}}src={trash} alt="Trash" className="trashBtn"  />
                                    Trash
                            </Button>
                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30,marginRight:131}} src={setting} alt="Archive"  className="" />
                                    Settings
                            </Button>
                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30,marginRight:85}} src={sendFeed} alt="Archive"  className="" />
                                    Send Feedback
                            </Button>
                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30,marginRight:155}} src={help} alt="Archive"  className="" />
                                    Help
                            </Button>
                            </div>
        );
    }
                            
}
export default Sidebar;