import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Refresh from '@material-ui/icons/Refresh';
import List from '@material-ui/icons/List';
import styled from 'styled-components';



import SvgIcon from '@material-ui/core/SvgIcon';

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

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
    this.state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
      };
    }
      handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleOtherMenuClose();
      };
      
      
      handleOtherMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleOtherMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
      };

    render(){
        // It is a better way to retrieve values from an object or an array .It's an ES6 features for javascript called destructuring assignment.
        const {anchorE1,moveMoreAnchorE1}=this.state;
        const {classes}=this.props;
        const isMenuOpen=Boolean(anchorE1);
        const isOtherMenuOpen=Boolean(moveMoreAnchorE1);
        
        const renderMenu=(
           
            <Menu 
            anchorE1={anchorE1}
            // transformOrigin={{vertical: 'top', horizontal:'right'}}
            // anchorOrigin={{vertical :'top',horizontal:'right'}}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
           
            >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My Account</MenuItem>
            </Menu>
        );

        const renderMobileMenu=(
            <Menu
            anchorE1={anchorE1}
            transformOrigin={{vertical:'top', horizontal:'right'}}
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            open={isOtherMenuOpen}
            onClose={this.handleOtherMenuClose}>

           <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
            </MenuItem>
            </Menu>
        );
        return(
            <div className={classes.root}>
           <AppBar position="static" >
           <Toolbar className="NavbarColor">
               <IconButton className={classes.menuButton} color="black" >
               <MenuIcon/>
               </IconButton>
               <Typography className={classes.title} variant="title" color="black" noWrap>
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
               aria-owns={isMenuOpen ? 'material-appbar':null}
               aria-haspopup="true"
               style={{
               marginTop: -110,
               marginLeft: 996,
               marginBottom: 0,
               marginRight:  0,
              }}
               onClick={this.handleProfileMenuOpen}
               color="inherit"
               >
               <AccountCircle />
               </IconButton>
               </div>

               <div className={classes.sectionMobile}>
               <div className="NavbarColor">
               <IconButton aria-haspopup="true" onClick={this.handleOtherMenuOpen} color="inherit">
               <MoreIcon/>
               </IconButton>
               </div>
               </div>

               </Toolbar>
               </AppBar> 
               {renderMenu}
               {renderMobileMenu}
              
           </div>
        );
    }
}
Navbar.propTypes={
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles) (Navbar);

