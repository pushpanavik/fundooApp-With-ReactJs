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
import menu from '../icons/menu.svg'
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
//import Backdrop from '@material-ui/core/Backdrop';
import Refresh from '@material-ui/icons/Refresh';
import List from '@material-ui/icons/List';
import apps from '../icons/apps.svg';
import notification from '../icons/notification.svg';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';

const theme = createMuiTheme({
    overrides: {
      MuiDrawer:{
          paperAnchorLeft:{
              top:64,
              width:250,
          }
      },
      MuiBackdrop:{
         invisible:true
      }
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
        marginLeft:-25,
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


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            left: false,
            changeView : false,
          };
          this.toggleView=this.toggleView.bind(this); 
    }
    toggleView(){
        console.log('inside toggleView');
        this.setState({
            changeView:!this.state.changeView,
        });
      var notes = document.getElementsByClassName("dashboard");
      if (this.state.changeView) {
        for ( var i = 0; i < notes.length; i++) {
          notes[i].style.width = "60%";
          notes[i].style.marginLeft = "10%";
        }
      } else {
        for (i = 0; i < notes.length; i++) {
          notes[i].style.width = "30%";
          notes[i].style.marginLeft = "0%";
        }
      }
    }
     handleRefresh(e){ 
        e.preventDefault(); 
         console.log("comes to refresh function");
        window.location.reload();
       
     }
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      
    }
      
      
    render(){
        // It is a better way to retrieve values from an object or an array .It's an ES6 features for javascript called destructuring assignment.
     
        const {classes}=this.props;
                 
        return(
            <div className={classes.root}>
           <AppBar position="fixed" >
           
           <Toolbar className="NavbarColor"> <img src={menu} style={{width:30}} alt="Menu"/>
               <IconButton className={classes.menuButton}  onClick={this.toggleDrawer('left', true)} ></IconButton>         
                <MuiThemeProvider theme={theme}>
               <Drawer variant="temporary"  open={this.state.left} onClose={this.toggleDrawer('left', false)}>
               <Sidebar/>
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
           
            <IconButton onClick={this.handleRefresh.bind(this)} className={classes.RefreshForm} ><Refresh/></IconButton>
           
            <IconButton onClick={this.toggleView}className={classes.ListForm}><List/></IconButton>
               
              
               </div>

               <IconButton className={classes.appIcon}>
                   <img src={apps} alt="apps"/>
               </IconButton>

               <IconButton className={classes.notificationIcon}>
                   <img src={notification} alt="Notification"/>
               </IconButton>
               <UserProfile />
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

