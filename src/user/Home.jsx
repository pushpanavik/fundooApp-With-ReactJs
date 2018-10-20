import React,{ Component } from 'react';
import Navbar from './Navbar';
import DisplayNote from '../Note/DisplayNote';


class Home extends Component{
    render(){
     
    return(
        <div>
       <Navbar />
       
       <DisplayNote/>
    
      
        </div>
    )
    }
}

export default Home;