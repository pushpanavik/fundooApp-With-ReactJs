import {postService} from '../user/UserService';
const ADD_NOTE="http://localhost:9090/fundoo/user/addNote";
class  NoteController{
  
    addNote(){
                //  var noteTitle=document.querySelector("#noteTitle");
                //  var noteDescription=document.querySelector('#noteDescriptn');
              var noteModel={
                    title:'',
                    description:'',
                    archive:'',
                    trash :'',
                    pin: '',
                    color:''
                }
                postService({ADD_NOTE,noteModel
                            }).then(res =>{
                                console.log(res);
                            })
                            .catch(error =>{
                                console.log(error);
                                 
                            });
                        } 
            }

export default NoteController;
