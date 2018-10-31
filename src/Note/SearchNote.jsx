import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import reminders from '../images/reminders.svg';

class SearchNote extends Component {

    goToReminder() {
        window.location.href = '/home/reminder';
    }

    render() {
        return(
            <div>
                <div className="search-notes-main-div">
                    <Card id="search-note-card" >
                        <div id="types-div">Types</div>
                        <Button id="search-btn" onClick={this.goToReminder}>
                            <img src={reminders} alt="reminder" id="search-reminder"/>
                            <div id="reminder-div">Reminders</div>
                        </Button>
                     
                   </Card>
                   
                </div>
            </div>
        );
    }
}

export default SearchNote;