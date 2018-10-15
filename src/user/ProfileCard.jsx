import React, {Component} from 'react';
import { Card, Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import NoteController from '../controller/NoteController';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PropTypes from 'prop-types';
import 'react-image-crop/dist/ReactCrop.css';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import account from '../icons/account.svg';

var noteCtrl=new NoteController();
class ProfileCard extends Component {
  constructor() {
    super();
    this.state = {
      user:[],
      show: true,
      open: false,
      file: '',
      imagePreviewUrl: '',
    };
    this.logout = this.logout.bind(this);
      
  }
  componentDidMount(){
  
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };


  handleClose = () => {
    this.setState({ open: false });
    if(this.state.imagePreviewUrl!==undefined && this.state.name===null){
    noteCtrl.uploadProfilePic(this.state.imagePreviewUrl,this.state.name);
    }
  };
  
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  logout() {
    localStorage.removeItem('UserData');
    window.location.href = "/";
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let name=e.target.files[0].name;

    reader.onloadend = () => {
        console.log(file);
        console.log(name);
        
      this.setState({
        file: file,
        name:name,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let user=JSON.parse(localStorage.getItem("UserData") || "[]");
    const { fullScreen } = this.props;
    let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt={this.props} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }


      console.log(this.state.user);
      
    return (
      <Card className="signoutcard">
        <div>
          <table>
            <tbody>
              <th>
                <div className="prof">
                <Button onClick={this.handleClickOpen}
                    style={{
                      backgroundColor: "red",
                      borderRadius: "100%",
                      marginTop: 7,
                      height: 75,
                      width: 90
                    }}>
                    <img src={user.profilepicImage} style={{   
                      borderRadius: 100,
                      height: 75,
                      width: 90,
                      marginTop: -8}}  alt={account}/>
                    </Button>
                  <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Select a Profile photo"}</DialogTitle>
          <DialogContent>
           <div className="previewComponent">
            <input className="fileInput" id="fileInput"
              type="file" 
              onChange={(e)=>this.handleImageChange(e)} />
                      
            <div className="imgPreview">
            {$imagePreview}
            </div> 
            </div>        
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
                </div>
                <div
                  style={{
                    marginTop: -91,
                    marginLeft: -53,
                    width: 100,
                    height: 70
                  }}
                />
              </th>
              <th>
                <div style={{ height: 70 }}>
                  <Typography>
                    {user.firstname} {this.state.user.lastname}
                  </Typography>
                  <br />
                  <Typography>{user.email}</Typography>
                </div>
              </th>
            </tbody>
          </table>
        </div>
        <Divider style={{ marginTop: 9 }} />
        <div>
          <Button
            variant="outlined"
            style={{ marginLeft: 213 }}
            onClick={this.logout}
          >
            Sign out
          </Button>
        </div>
      </Card>
    );
  }
}

ProfileCard.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
  };
export default withMobileDialog()(ProfileCard);
