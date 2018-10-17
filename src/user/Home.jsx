import React,{ Component } from 'react';
import Navbar from './Navbar';
import Note from '../Note/Note';
import notes from '../Note/notes';

class Home extends Component{
    componentDidMount() {
        if (window.location.pathname === '/home/notes') {
            this.setState({
                background: {
                    backgroundColor: 'rgb(255, 187, 0)',
                },
                title: 'Google Keep'
            });
        }
        else if (window.location.pathname === '/home/trash') {
            this.setState({
                background: {
                    backgroundColor: 'rgb(99, 99, 99)',
                },
                title: 'Trash'
            });
        }
        else if (window.location.pathname === '/home/archive') {
            this.setState({
                background: {
                    backgroundColor: 'rgb(96, 125, 139)',
                },
                title: 'Archive'
            });
        }
        else if (window.location.pathname === '/home/reminder') {
            this.setState({
                background: {
                    backgroundColor: 'rgb(96, 125, 139)',
                },
                title: 'Reminders'
            });
        }
        else if (window.location.pathname === '/home/search') {
            this.setState({
                background: {
                    backgroundColor: 'rgb(62, 80, 180)',
                },
                title: 'Google Keep'
            });
        }
        
    }


    render(){
       
    return(
        <div>
       <Navbar />
       <Note/>
        </div>
    )
    }
}

export default Home;