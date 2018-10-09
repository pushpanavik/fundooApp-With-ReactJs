import {
    postService,postResetService
} from '../user/UserService';
const ADD_NOTE = "http://localhost:9090/fundoo/user/addNote";
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
            })
            .catch(error => {
                console.log(error);
            });


    }
    resetPassword(password){
        postResetService( password)
            .then(response =>{
                    this.props.history.push("/login");
              
            })
            .catch(error =>{
                console.log(error);
                window.location.reload();
                this.props.history.push("/resetPassword"); 
            }); 
    }
}

export default NoteController;