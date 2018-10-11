import axios from 'axios';

let postService=(url,note) =>{
    console.log('data of user is',url,note);
    return axios({
        method: 'POST',
        url:url,
        headers:{
            'Content-Type' : 'application/json',
            'token': localStorage.getItem("token")
        },
        data: note,
})
    
   
}
const postResetService=(data) =>{
   
    console.log('data inside reset ',data)
    console.log(localStorage.getItem("forgotToken"));
    
    return axios({
        method: 'POST',
        url:"http://localhost:9090/fundoo/user/resetPassword",
        headers:{
            'Content-Type' : 'application/json',
            'token': localStorage.getItem("forgotToken")
        },
        data: data,
})
}

const getService=(url) =>{
    console.log('token inside getuser',url);
    return axios({
        method:'GET',
        url:url,
        headers:{
            ContentType :'application/json',
            'token': localStorage.getItem("token")
        },
    })
}
    
export {postService,postResetService,getService};