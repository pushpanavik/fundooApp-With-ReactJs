import React,{ Component } from 'react';
import Navbar from './Navbar';
import Note from '../Note/Note';


class Home extends Component{
    
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