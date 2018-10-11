import {
    postService,postResetService, getService
} from '../user/UserService';
const ADD_NOTE = "http://localhost:9090/fundoo/user/addNote";
const NOTE_PATH="http://localhost:9090/fundoo/user/displayNote";
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
}


export default NoteController;