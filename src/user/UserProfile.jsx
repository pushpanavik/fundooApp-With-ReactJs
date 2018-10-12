import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import account from '../icons/account.svg';
import ToggleDisplay from 'react-toggle-display';
import ProfileCard from './ProfileCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: '350px',
      backgroundColor: theme.palette.background.paper,
    },
  });
class UserProfile extends Component{
    constructor(){
        super();
        this.state={
            show:true,
            firstLetter:null
      } 
      
    //   this.getUserDetails=this.getUserDetails.bind(this);
    //   this.getInitialsLetter=this.getInitialsLetter.bind(this);
      this.handleClick=this.handleClick.bind(this);
    }
      handleClick(){
          console.log(1); 
          this.setState({
              show:!this.state.show
          })
      }
     
//       getUserDetails(userInfo){
//           localStorage.setItem('user',userInfo)
//           let firstname=userInfo.firstname;
//           console.log(firstname);
          
//           let takeLetter=this.getInitialsLetter(firstname);
//             console.log(takeLetter);
            
//           this.setState={
//               firstLetter:takeLetter,
//           }
//       }
    
      
//     getInitialsLetter(name) {
//         var canvas = document.createElement('canvas');
//         canvas.style.display = 'none';
//         canvas.width = '32';
//         canvas.height = '32';
//         document.body.appendChild(canvas);
//         var context = canvas.getContext('2d');
//         context.fillStyle = "green";
//         context.fillRect(0, 0, canvas.width, canvas.height);
//         context.font = "16px Arial";
//         context.fillStyle = "#ccc";
//         var first;
//         if (name && name !==undefined) {
//           console.log("under first name");
//             first = name.charAt(0);
//             console.log(first);
//                 var initials = first;
//                 context.fillText(initials.toUpperCase(), 10, 23);
//             var data = canvas.toDataURL();
//             document.body.removeChild(canvas);
//             return data;
//         } else {
//             return false;
//         }
// }
    
    render()
    {
        //console.log(this.state.firstLetter);
        const {classes}=this.props;
      
        return(
            <div>
           
            <IconButton  variant="raised" style={{marginBottom: -14}}  onClick={this.handleClick}>
            <img src={account} style={{borderRadius:50}}  alt="Account"/>
            </IconButton>   
       
                 
            <div className={classes.root}>
             <ToggleDisplay if={!this.state.show}>
            <ProfileCard/>
            </ToggleDisplay>
            </div>
            </div>
        )
    }
   
}UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(UserProfile);