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
                <Button href="/home/note" className="sidebarBtn" >
                                 <img style={{width:30,height:30,marginLeft:-172}} src={Notes} alt="notes"   />
                                
                            </Button>
                            <span style={{marginLeft:-165}}> Notes</span>
                           
                 
                    
                <Button  href="/home/reminder" className="sidebarBtn"  >
                        <img style={{width:30, height:30,marginLeft:-180}}src={reminders} alt="Reminders" />
                        </Button>
                        <span style={{marginLeft:-160}}>Reminders</span>

                           
               

                <Button href=""  className="sidebarBtn">
                                <img style={{width:30, height:30,marginLeft:-169}} src={labe} alt="Archive"  className="" />
                            </Button>
                            <span style={{marginLeft:-162}}> Label</span>

                <Button href="/home/archive"  className="sidebarBtn">
                                <img style={{width:30, height:30,marginLeft:-172}} src={archive} alt="Archive"  className="archiveBtn" />
                            </Button>
                            <span style={{marginLeft:-163}}>  Archive</span>

                <Button href="/home/trash"  className="sidebarBtn">
                                <img  style={{width:30, height:30,marginLeft:-172}} src={trash} alt="Trash" className="trashBtn"  />
                            </Button>
                            <span style={{marginLeft:-157}}>Trash</span>

                <Button href=""  className="sidebarBtn" >
                                <img style={{width:30, height:30,marginLeft:-170}} src={setting} alt="Setting"  className="" />    
                            </Button>
                            <span style={{marginLeft:-160}}> Settings</span>

                <Button href=""  className="sidebarBtn" >
                                <img style={{width:30, height:30,marginLeft:-174}} src={sendFeed} alt="Feedback"  className="" />       
                            </Button>
                            <span style={{marginLeft:-160}}>Send Feedback</span>

                <Button href=""  className="sidebarBtn" >
                                <img style={{width:30, height:30,marginLeft:-182}} src={help} alt="Help"  className="" />   
                            </Button>
                            <span style={{marginLeft:-163}}> Help</span>
                            </div>
        );
    }
                            
}
export default Sidebar;