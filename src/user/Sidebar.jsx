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
                <Button href="/home/notes" className="sidebarBtn"  style={{width:30}}>
                                 <img style={{width:30,height:30}} src={Notes} alt="notes"   />
                            </Button>
                            <span style={{marginLeft:120}}>Notes</span>

                                <Button  href="/home/reminder" className="sidebarBtn"  style={{width:30}}>
                                    <img style={{width:30, height:30}}src={reminders} alt="Reminders" />
                            </Button>
                            <span style={{marginLeft:85}}>Reminders</span>

                            <Button href=""  className="sidebarBtn" style={{width:30}}>
                                <img style={{width:30, height:30}} src={labe} alt="Archive"  className="" />
                            </Button>
                            <span style={{marginLeft:115}}> Label</span>

                                <Button href="/home/archive"  className="sidebarBtn" style={{width:30}}>
                                <img style={{width:30, height:30}} src={archive} alt="Archive"  className="archiveBtn" />
                            </Button>
                            <span style={{marginLeft:101}}>  Archive</span>

                                <Button href="/home/trash"  className="sidebarBtn" style={{width:30}}>
                                <img  style={{width:30, height:30}} src={trash} alt="Trash" className="trashBtn"  />
                            </Button>
                            <span style={{marginLeft:116}}>Trash</span>

                            <Button href=""  className="sidebarBtn" style={{width:30}}>
                                <img style={{width:30, height:30}} src={setting} alt="Setting"  className="" />
                                   
                            </Button>
                            <span style={{marginLeft:98}}> Settings</span>

                            <Button href=""  className="sidebarBtn" style={{width:30}}>
                                <img style={{width:30, height:30}} src={sendFeed} alt="Feedback"  className="" />       
                            </Button>
                            <span style={{marginLeft:54}}>Send Feedback</span>

                            <Button href=""  className="sidebarBtn" style={{width:30}}>
                                <img style={{width:30, height:30}} src={help} alt="Help"  className="" />   
                            </Button>
                            <span style={{marginLeft:126}}> Help</span>
                            </div>
        );
    }
                            
}
export default Sidebar;