import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

import Refresh from '@material-ui/icons/Refresh';
import List from '@material-ui/icons/List';


import Sidebar from './Sidebar';

const styles = theme =>({
    root:{
        width:'100%',
        marginTop:-50,
        backgroundColor:'#fb0',
    },
    grow :{
        flexGrow:1,
    },
    menuButton: {
        marginLeft:-12,
        marginRight: 20,
    },
    title: {
        display:'none',
        [theme.breakpoints.up('lg')]:{
            display :'block',
        },
    },
    RefreshForm: {
      
        marginTop: -35,
        marginRight:  0,
        marginBottom : 0,
        marginLeft: 658,
      },
    input: {
        display: 'none',
      },
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor :fade(theme.palette.common.white,0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white,0.25),
        },
        marginRight :theme.spacing.unit*2,
        marginLeft :0,
        width :'100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: 35,
            width: '50%',
            height: 46,
        },
    },
    searchIcon :{
        width: 33,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

  inputRoot: {
    color: 'inherit',
    width: '100%',
    marginLeft: 30,
  },
  inputInput: {
    paddingTop: 10,
    // paddingRight: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
     paddingLeft: theme.spacing.unit,
    transition: theme.transitions.create('width'),
    width: '100%',
 
    [theme.breakpoints.up('md')]: {
      width: 400,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
     
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  ListForm: {
   
    marginTop: -72,
    marginRight:  0,
    marginBottom : 0,
    marginLeft: 727,
  },
});

class Navbar extends Component{
    constructor(){
        super();
        this.state={
            showMenu : '',
        }
      this.toggleMenu = this.toggleMenu.bind(this);
    }
     
      toggleMenu=()=>{
        this.setState({ showMenu: !this.state.showMenu });
        console.log("clicks toggle menu ");
      }
      
      

    render(){
        // It is a better way to retrieve values from an object or an array .It's an ES6 features for javascript called destructuring assignment.
       
        const {classes}=this.props;
       
          
        return(
            <div className={classes.root}>
           <AppBar position="static" >
           <Sidebar />
           <Toolbar className="NavbarColor">
               <IconButton className={classes.menuButton} color="primary" onClick={this.toggleMenu} >
               <MenuIcon/>
               
               </IconButton>
               <Typography className={classes.title} variant="title" color="primary" noWrap>
               Google Keep
               </Typography>

               <div className={classes.search}>
               <div className={classes.searchIcon}>
               <SearchIcon/>
               </div>

               <Input
               placeholder="Search"
               disableUnderline
               classes={{
                   root:classes.inputRoot,
                   input:classes.inputInput,
               }}
               ></Input>
           
            <IconButton  className={classes.RefreshForm} ><Refresh/></IconButton>
           
            <IconButton className={classes.ListForm}><List/></IconButton>
               
               <IconButton 
             
               style={{
               marginTop: -110,
               marginLeft: 996,
               marginBottom: 0,
               marginRight:  0,
              }}
              
               color="inherit"
               >
               <AccountCircle />
               </IconButton>
               </div>

               <div className={classes.sectionMobile}>
               <div className="NavbarColor">
               <IconButton color="primary">
               <MoreIcon/>
               </IconButton>
               </div>
               </div>

               </Toolbar>
               </AppBar> 
              
              
           </div>
        );
    }
}
Navbar.propTypes={
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (Navbar);

