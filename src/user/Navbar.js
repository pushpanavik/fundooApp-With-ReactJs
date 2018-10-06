import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Drawer from '@material-ui/core/Drawer';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles,MuiThemeProvider,createMuiTheme  } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
// import {sidebarIcons} from '../user/Sidebar';
import Button from '@material-ui/core/Button';
import Refresh from '@material-ui/icons/Refresh';
import List from '@material-ui/icons/List';
import Notes from '../icons/Notes.svg';
import reminders from '../icons/reminders.svg';
import trash from '../icons/trash.svg';
import archive from '../icons/archive.svg';
import setting from '../images/setting.svg';
import sendFeed from '../images/sendFeed.svg';
import help from '../images/help.svg';
import labe from '../images/labe.svg';
import apps from '../icons/apps.svg';
import notification from '../icons/notification.svg';

const theme = createMuiTheme({
    overrides: {
      MuiButton: { 
        Drawer: { 
          top: 64,
          width:250, 
        },
      },
    },
  });


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
        marginLeft:-23,
        marginRight: 20,
        color:'black',
    },
    title: {
        display:'none',
        [theme.breakpoints.up('lg')]:{
            display :'block',
        },
    },
    RefreshForm: {
      
        marginTop: -33,
        marginRight:  0,
        marginBottom : 0,
        marginLeft: 743,
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
    marginLeft: 793,
  },
  appIcon:{
      marginBottom:-14,
      marginLeft:269,
  },
  notificationIcon:{
    marginBottom:-14,
    marginLeft:-8,
},

});
// const theme1 = createMuiTheme({
//     palette: {
//       secondary: {
//         main: '#f44336',
//       },
//     },
//   });

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            left: false,
          };
    }
     
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
      
    render(){
        // It is a better way to retrieve values from an object or an array .It's an ES6 features for javascript called destructuring assignment.
       
        const {classes}=this.props;
                 
        return(
            <div className={classes.root}>
           <AppBar position="static" >
           
           <Toolbar className="NavbarColor"> <MenuIcon/>
               <IconButton className={classes.menuButton}   onClick={this.toggleDrawer('left', true)} ></IconButton>         
                <MuiThemeProvider theme={theme}>
               <Drawer variant="temporary"  open={this.state.left} onClose={this.toggleDrawer('left', false)}>
               <Button  href="" className="sidebarBtn"  style={{'textTransform': 'initial'}}>
                                 <img style={{width:30,height:30}} src={Notes} alt="notes" className="noteBtn"  />
                                    Notes
                            </Button>

                                <Button  href="" className="sidebarBtn"  style={{'textTransform': 'initial'}}>
                                    <img style={{width:30, height:30}}src={reminders} alt="Reminders" className="reminderBtn"/>
                                    Reminders
                            </Button>

                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30}} src={labe} alt="Archive"  className="" />
                                    Label
                            </Button>
                                <Button href="/home/archive"  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30}} src={archive} alt="Archive"  className="archiveBtn" />
                                    Archive
                            </Button>
                                <Button href="/home/trash"  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img  style={{width:30, height:30}}src={trash} alt="Trash" className="trashBtn"  />
                                    Trash
                            </Button>
                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30}} src={setting} alt="Archive"  className="" />
                                    Settings
                            </Button>
                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30}} src={sendFeed} alt="Archive"  className="" />
                                    Send Feedback
                            </Button>
                            <Button href=""  className="sidebarBtn" style={{'textTransform': 'initial'}}>
                                <img style={{width:30, height:30}} src={help} alt="Archive"  className="" />
                                    Help
                            </Button>
             
            </Drawer>
            </MuiThemeProvider>
               
               <Typography className={classes.title} variant="title"  noWrap>
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

               <IconButton className={classes.appIcon}>
                   <img src={apps} alt="apps"/>
               </IconButton>

               <IconButton className={classes.notificationIcon}>
                   <img src={notification} alt="Notification"/>
               </IconButton>

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

