import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

//import Divider from '@material-ui/core/Divider';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };
  

class Sidebar extends React.Component{
    state = {
        left: false,
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
       

      render() {
        const { classes } = this.props;
    
        const sideList = (
          <div className={classes.list}>
         
          </div>
        );
    
        
    
        return (
          <div>
           
            <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
         
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div >
                {sideList}
              </div>
            </Drawer>
           
           
            
          </div>
        );
      }
    }
    
    Sidebar.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
export default withStyles(styles) (Sidebar);

