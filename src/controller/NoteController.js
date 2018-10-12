import {
    postService,postResetService, getService,postImageService,putService
} from '../user/UserService';
const ADD_NOTE = "http://localhost:9090/fundoo/user/addNote";
const NOTE_PATH="http://localhost:9090/fundoo/user/displayNote";
const PROFILE_PATH="http://localhost:9090/fundoo/uploadFile";
const  UPDATE_PROFILE ="http://localhost:9090/fundoo/updateUser";
class NoteController {
    
    addNote(title, description) {
        console.log("Add Note called");

        console.log(title);
        console.log(description);

        const noteModel = {
            title: title,
            description: description
        }
        postService(ADD_NOTE, noteModel)
            .then(res => {
                console.log(res);
                localStorage.setItem("NoteToken",res.data.msg);
                this.getUserNote();
            })
            .catch(error => {
                console.log(error);
            });


    }
    resetPassword(password){
        postResetService(password)
            .then(response =>{
                    this.props.history.push("/login");
            })
            .catch(error =>{
                console.log(error);
                window.location.reload();
                this.props.history.push("/resetPassword"); 
            }); 
    }

   getUserNote(callback){
       getService(NOTE_PATH).then(res =>  
        {console.log(res); 
            return callback(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
   }
    dataURLtoFile (dataurl, filename) {
    const arr = dataurl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n) {
      u8arr[n - 1] = bstr.charCodeAt(n - 1)
      n -= 1 // to make eslint happy
    }
    return new File([u8arr], filename, {
      type: mime
    });
  }
   uploadProfilePic(urlPic,name){

    const file =this.dataURLtoFile(urlPic,name);
    var form1 = new FormData();
    form1.append("file", file);
    console.log(form1);
    postImageService(PROFILE_PATH,form1)
    .then(res =>
        {
            console.log(res);
            this.updateUserProfile(res.data.msg);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    updateUserProfile(image){
        console.log('image info' + image);
        var user=localStorage.getItem('UserData');
        user.profilepicImage = image;
        console.log(user.profilepicImage);
        
        putService(UPDATE_PROFILE,user)
        .then(res =>{
            console.log(res);
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
export default NoteController;