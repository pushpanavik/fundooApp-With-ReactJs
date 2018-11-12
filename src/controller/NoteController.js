
import {
    postService, postResetService, getService, postImageService, putService, deleteService,
    deleteLabelService,putLabelNoteService
} from '../user/UserService';


const ADD_NOTE = "http://localhost:8080/createNote";
const NOTE_PATH = "http://localhost:8080/getNotesOfUser";
const PROFILE_PATH = "http://localhost:8080/uploadFile";
const UPDATE_PROFILE = "http://localhost:8080/updateUser";
const USER_PATH = "http://localhost:8080/getuser/";
const UPDATE_NOTE = "http://localhost:8080/updateNote";
const DELETE_NOTE = "http://localhost:8080/deleteNote/";
const ADD_LABEL = "http://localhost:8080/addLabel";
const DISPLAY_LABEL="http://localhost:8080/displayLabel";
const UPDATE_Label="http://localhost:8080/updateLabel";
const DELETE_Label="http://localhost:8080/delete/";
const LABEL_NOTE="http://localhost:8080/updateNoteLabel/";
const DELETE_LABELNOTE="http://localhost:8080/deleteLabel/";
var dateFormat = require('dateformat');

class NoteController {
    constructor(){
        
        var path=window.location.pathname;
        var value=path.split('/')[3];
      
      
    }
  
    addNote(title, description) {

        var self=this;
        console.log("Add Note called");

        console.log(title);
        console.log(description);

        const noteModel = {
            title: title,
            description: description,
            image:'',
            remindertime:'',
            tempdate:''

        }
        if (title !== "" && description !== "") {
            postService(ADD_NOTE, noteModel)
                .then(res => {
                    console.log(res);
                    localStorage.setItem("NoteToken", res.data.msg);
                    self.getAllNote();
                  
                })
                .catch(error => {
                    console.log(error);
                });

        }
    }
    resetPassword(password) {
        postResetService(password)
            .then(response => {
                this.props.history.push("/login");
            })
            .catch(error => {
                console.log(error);
                window.location.reload();
                this.props.history.push("/resetPassword");
            });
    }

    getUserNote(callback) {
        getService(NOTE_PATH)
            .then(res => {           
                return callback(res.data);

            })
            .catch(error => {
                console.log(error);
            })
    }
    dataURLtoFile(dataurl, filename) {
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
    uploadProfilePic(urlPic, name) {

        const file = this.dataURLtoFile(urlPic, name);
        var form1 = new FormData();
        form1.append("file", file);
        console.log(form1);
        postImageService(PROFILE_PATH, form1)
            .then(res => {
                console.log(res);
                this.updateUserProfile(res.data.msg);
            })
            .catch(error => {
                console.log(error);
            })
    }
    getUserInfo() {
        getService(USER_PATH
        ).then(resp => {
            console.log(resp);
            let userInfoFromResponse = resp.data;
            localStorage.setItem("UserData", JSON.stringify(userInfoFromResponse));
            return userInfoFromResponse;


        })
            .catch(error => {
                console.log(error);
            })
    }
    updateUserProfile(image) {

        console.log('image info' + image);
        var user = JSON.parse(localStorage.getItem("UserData") || "[]");

        user.profilepicImage = image;
        console.log(user.profilepicImage);

        putService(UPDATE_PROFILE, user)
            .then(res => {
                console.log(res);
                //this.loadProfileImage(res);
                localStorage.removeItem('UserData');
                localStorage.setItem("UserData", JSON.stringify(res.data));

            })
            .catch(error => {
                console.log(error);
            })
    }
    
    isPinned(note) {

        console.log('inisde pin', note)
        if (note.pin === false) {
            note.pin = true;
        }
        else {
            note.pin = false;
        }
        this.updateNote(note);
    }

    todayReminder(note){
        var day=new Date();
       
        console.log('note infor uinse remider tody',note);
        var today =dateFormat( day,"mmm d, h:MM TT")
        console.log("Date......");
        note.reminderDate = today;
        this.updateNote(note);
        
    }

    tommorrowReminder(note){
       var tommorow=new Date();
     tommorow.setDate(tommorow.getDate()+1);
       tommorow=dateFormat(tommorow,"mmm d, h:MM TT");
      
       note.reminderDate=tommorow;
       this.updateNote(note);
     }

     nextWeekReminder(note){
         console.log('next week',note);
         var nextweek=new Date();
         var day=nextweek.getDay();
         var numberofDays=7-day+1;
         nextweek.setDate(nextweek.getDate() +numberofDays);
         nextweek=dateFormat(nextweek,"mmm d, h :MM TT ")
         note.reminderDate=nextweek;
         this.updateNote(note);
         
     }

     removeReminder(note){
         note.reminderDate=null;
         note.remindertime=null;
         this.updateNote(note);
     }

     reminderDate(note){
      
         var myDate=new Date(note.tempdate);
         if(note.remindertime.split(':')[1].split('')[1] ==='PM'){
             var a=note.remindertime.split(':')[0];
             var b=12;
             var time24=this.addTime(a,b);
             myDate.setHours(time24);
             myDate.setMinutes(note.remindertime.split(':')[1].split('')[0]);
         }
         else{
             myDate.setHours(note.remindertime.split(':')[0]);
             myDate.setMinutes(note.remindertime.split(':')[1].split('')[0]);
         }
         note.reminderDate=myDate;
         this.updateNote(note);
     }

     addtime(a,b){
         var count=0;
         while(count <a){
             b++;
             count++;
         }
         return b;
     }
    updateNote(note){
        console.log('update note',note)
    putService(UPDATE_NOTE,note)
    .then(res =>{
        console.log(res);
       this.getAllNote();
      

    })
    .catch(error =>{
        console.log(error);
    })
    }

    getAllNote() {
        getService(NOTE_PATH).then(res => {
            // console.log(res); 

        })
            .catch(error => {
                console.log(error);
            })
    }


    changeColor(note, btn) {
        if (btn === 1) {
            note.color = 'white';
        }
        else if (btn === 2) {
            note.color = 'rgb(255, 138, 128)';
        }
        else if (btn === 3) {
            note.color = 'rgb(255, 209, 128)';
        }
        else if (btn === 4) {
            note.color = 'rgb(255, 255, 141)';
        }
        else if (btn === 5) {
            note.color = 'rgb(204, 255, 144)';
        }
        else if (btn === 6) {
            note.color = 'rgb(167, 255, 235)';
        }
        else if (btn === 7) {
            note.color = 'rgb(128, 216, 255)';
        }
        else if (btn === 8) {
            note.color = 'rgb(130, 177, 255)';
        }
        else if (btn === 9) {
            note.color = 'rgb(179, 136, 255)';
        }
        else if (btn === 10) {
            note.color = 'rgb(248, 187, 208)';
        }
        else if (btn === 11) {
            note.color = 'rgb(215, 204, 200)';
        }
        else if (btn === 12) {
            note.color = 'rgb(207, 216, 220)';
        }
        else {
            note.color = 'white';
        }

        this.updateNote(note);
    }

    isTrashNote(note) {
        console.log(note);
        if (note.trash === false) {
            note.trash = true;
            note.pin = false;
        }
        else {
            note.trash = false;
        }
        this.updateNote(note);

    }

    deleteNoteForever(note) {
        console.log(note);
        var url = DELETE_NOTE + note.id;
        deleteService(note, url)
            .then(res => {
                console.log(res);
                this.updateNote(note);
            })
            .catch(error => {
                console.log(error);
            })
    }

    getImageonCard(event,note) {
        console.log('id =',note.id)
        console.log('note data',note);
        
        event.preventDefault();
      var form = new FormData();
        //   console.log("form", event.target.files[0]);

          form.append("file", event.target.files[0]);
          console.log("form after appending", event.target.files[0]);
            postImageService(PROFILE_PATH, form)
        .then(res => {
            console.log(res);
            console.log(res.data)
           // var note=JSON.parse(localStorage.getItem("noteInfo") || "[]");
            note.image=res.data.msg;
            
            this.updateNote(note);
        })
        .catch(error => {
            console.log(error);
        })
        
      }
      
    
      removeImage(note) {
        console.log("note info ", note);
        console.log("image link", note.image);
        note.image = null;
        this.updateNote(note);

      };


    isArchiveNote(note) {
        console.log("Inside archive chk......");
        if (note.archive === false) {
            note.archive = true;
        }
        else {
            note.archive = false;
        }
        this.updateNote(note);
    }

    getAllLabel(callback) {
        getService(DISPLAY_LABEL).then(res => {
            return callback(res.data);
        })
            .catch(error => {
                console.log(error);
            })
    }
    getLabel() {
        console.log('comes under controller in get label');
                getService(DISPLAY_LABEL).then(res => {
                 console.log(res);
                        
        })
            .catch(error => {
                console.log(error);
            })
    }

    addLabelOnNote(note,label){

        console.log('note infor from add label on note',note);
        console.log('label infor from add label on note',label);
        var url=LABEL_NOTE+note.id+"/"+label.labelId;
        putLabelNoteService(url)
        .then(res =>{
            console.log("Response....", res.data);
           
        })
        .catch(error => {
            console.log(error);
        })
    }
    deleteLabelOnNote(label,note){
        console.log(label.labelId);
        console.log(note.id);
        
        
        var url=DELETE_LABELNOTE+ note.id+ "/"+ label.labelId;
        deleteLabelService(url)
        .then(res =>{
            console.log(res);
           
        })
        .catch(error =>{
            console.log(error);
        })
    }
    getLabelOnNote() {
        getService(NOTE_PATH)
            .then(res => {
                // console.log(res); 
                console.log("Response....", res.data);
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    addLabelOnSidebar(labelname){
        const label={
            name:labelname
        }
        if(label.name!==null  ||label.name!==undefined){
            postService(ADD_LABEL,label)
            .then(res=>{
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            })
        }
       
    }
    editLabel(labelname,label){
        
        const labelObj={
            name:labelname,
            labelId:label.labelId,
            userDetails:label.userDetails
        }
        if(labelname!==null  ||labelname!==undefined){
            putService(UPDATE_Label,labelObj)
            .then(res=>{
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            })
        }
    }

    deleteLabel(label){
            if(label!==null  ||label!==undefined){
            var url=DELETE_Label+ label.labelId;
            deleteLabelService(url)
            .then(res=>{
                console.log(res);
            })
            .catch(err =>{
                console.log(err);
            })
        }
    }
    deleteReminderOnNote(note){
        note.reminderDate=null;
        putService(UPDATE_NOTE,note)
        .then(res =>{
            console.log(res);
           
        })
        .catch(err =>{
            console.log(err);
        })
    }
}


export default NoteController;