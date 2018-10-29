
import {
    postService, postResetService, getService, postImageService, putService, deleteService,
    deleteLabelService,putLabelNoteService
} from '../user/UserService';


const ADD_NOTE = "http://localhost:9090/fundoo/user/addNote";
const NOTE_PATH = "http://localhost:9090/fundoo/user/displayNote";
const PROFILE_PATH = "http://localhost:9090/fundoo/uploadFile";
const UPDATE_PROFILE = "http://localhost:9090/fundoo/updateUser";
const USER_PATH = "http://localhost:9090/fundoo/getUser";
const UPDATE_NOTE = "http://localhost:9090/fundoo/user/updateNote";
const DELETE_NOTE = "http://localhost:9090/fundoo/user/deleteNote/";
const ADD_LABEL = "http://localhost:9090/fundoo/user/addLabel";
const DISPLAY_LABEL="http://localhost:9090/fundoo/user/displayLabel";
const UPDATE_Label="http://localhost:9090/fundoo/user/updateLabel";
const DELETE_Label="http://localhost:9090/fundoo/user/delete/";
const LABEL_NOTE="http://localhost:9090/fundoo/user/updateNoteLabel/";
const DELETE_LABELNOTE="http://localhost:9090/fundoo/user/deleteLabel/";

class NoteController {
    constructor(){
        
        var path=window.location.pathname;
        var value=path.split('/')[3];
        console.log('path value',value);
        console.log(path);
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
        console.log('note infor uinse remider tody',note);
        var today = new Date();
        console.log("Date......");
        console.log(today); 
        if(today.getHours() >20 && today.getHours() <8){
            today.setHours(8);
            today.setMinutes(0);
        }else if(today.getHours() <20 && today.getHours() >8){
            today.setHours(20);
            today.setMinutes(0);
}
        note.reminderDate = today;
        this.updateNote(note);
        
    }

    tommorrowReminder(note){
       var tommorow=new Date();
       tommorow.setDate(tommorow.getDate() +1);
       tommorow.setHours(8);
       tommorow.setMinutes(0);
       note.reminderDate=tommorow;
       this.updateNote(note);
     }

     nextWeekReminder(note){
         console.log('next week',note);
         var nextweek=new Date();
         var day=nextweek.getDay();
         var numberofDays=7-day+1;
         nextweek.setDate(nextweek.getDate() +numberofDays);
         nextweek.setHours(8);
         nextweek.setMinutes(0);
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
        event.preventDefault();
      var form = new FormData();
          console.log("form", event.target.files[0]);

          form.append("file", event.target.files[0]);
          console.log("form after appending", event.target.files[0]);
            postImageService(PROFILE_PATH, form)
        .then(res => {
            console.log(res);
            console.log(res.data)
            var note=JSON.parse(localStorage.getItem("noteInfo") || "[]");
            note.image=res.data.msg;
            this.updateNote(note);
        })
        .catch(error => {
            console.log(error);
        })
        
      }
      
    // var getImageUrl = '';
    //   $scope.imageSelect = function(event, note) {
    //     console.log('goes under imge', event);
    //     console.log('note info', note);
    //     if (event != undefined) {
    //       event.stopPropagation();
    //     }
    //     document.addEventListener("change", function(event) {
    //       console.log('inside document');
    //       var form = new FormData();
    //       console.log("form", event.target.files[0]);

    //       form.append("file", event.target.files[0]);
    //       console.log("form after appending", event.target.files[0]);
    //       var url = baseUrl + "uploadFile";
    //       console.log("url", url);
    //       noteservice.postImageService(form, url).then(function successCallback(response) {
    //         console.log("Upload Successfully done", response);
    //         note.image = response.data.msg;
    //         console.log('getImageUrl', note.image);
    //         updateImage(note);
    //       }, function errorCallback(response) {
    //         console.log(" Upload failed", response);
    //       });
    //     });
    //   };

    //   function updateImage(note) {
    //     console.log("In update image...............");

    //     var url = baseUrl + 'user/updateNote';
    //     console.log('url inside update image', url);
    //     noteservice.putService(url, note).then(function successCallback(response) {

    //       console.log(response);
    //     }, function errorCallback(response) {
    //       console.log("error" + response.data);
    //     })
    //   }
    //   $scope.removeImage = function(note) {
    //     console.log("note info ", note);
    //     console.log("image link", note.image);
    //     note.image = null;
    //     $scope.getAllNote();
    //     updateImage(note);

    //   };


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
        var url=DELETE_LABELNOTE+ label.labelId+ "/"+note.id;
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
}


export default NoteController;