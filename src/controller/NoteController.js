
import {
    postService, postResetService, getService, postImageService, putService, deleteService
} from '../user/UserService';

const ADD_NOTE = "http://localhost:9090/fundoo/user/addNote";
const NOTE_PATH = "http://localhost:9090/fundoo/user/displayNote";
const PROFILE_PATH = "http://localhost:9090/fundoo/uploadFile";
const UPDATE_PROFILE = "http://localhost:9090/fundoo/updateUser";
const USER_PATH = "http://localhost:9090/fundoo/getUser";
const UPDATE_NOTE = "http://localhost:9090/fundoo/user/updateNote";
const DELETE_NOTE = "http://localhost:9090/fundoo/user/deleteNote/"

class NoteController {

    addNote(title, description) {
        console.log("Add Note called");

        console.log(title);
        console.log(description);

        const noteModel = {
            title: title,
            description: description

        }
        if (title !== "" && description !== "") {
            postService(ADD_NOTE, noteModel)
                .then(res => {
                    console.log(res);
                    localStorage.setItem("NoteToken", res.data.msg);
                    this.getAllNote();
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
                // console.log(res); 
                console.log("Response....", res.data);
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

    // loadProfileImage(user){
    //     console.log(user);
    //     var url =user.data.profilepicImage;
    //     var pathname = new URL(url).pathname;
    //     const profileImgUrl="http://localhost:9090"+pathname+"";
    //     getService(profileImgUrl)
    //     .then(res=>{
    //         console.log(res);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // }
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
}


export default NoteController;