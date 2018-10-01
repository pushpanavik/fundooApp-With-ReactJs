import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Button from '@material-ui/core/Button';
import Refresh from '@material-ui/icons/Refresh';
import List from '@material-ui/icons/List';
import styled from 'styled-components';




class Sidebar extends React.Component{
    state = {
    
      };
    
      

    render(){
        // It is a better way to retrieve values from an object or an array .It's an ES6 features for javascript called destructuring assignment.
      
        return(
            <div >
         
            <Button   ><Refresh/></Button>
           
            <Button ><List/></Button>
              
           </div>
        );
    }
}
Sidebar.propTypes={
    classes: PropTypes.object.isRequired,
};
export default Sidebar;

