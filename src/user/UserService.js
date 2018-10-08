import axios from 'axios';

const postService=(url,data) =>{
    console.log('data of user is',url,data);
    return axios({
        method: 'POST',
        url:url,
        headers:{
            ContentType : 'application/json',
            'token': localStorage.getItem("token")
        },
        data: data,
})
    
   
}
const postResetService=(token,data) =>{
    console.log('token of user is',token);
    console.log('data inside reset ',data)
    return axios({
        method: 'POST',
        url:"http://localhost:9090/fundoo/user/resetPassword",
        headers:{
            ContentType : 'application/json',
            'token': token,
        },
        data: data,
})
}

const getService=(url,token) =>{
    console.log('token inside getuser',token);
    return axios({
        method:'GET',
        url:"http://localhost:9090/fundoo/getUser",
        headers:{
            ContentType :'application/json',
            'token':token,
        },
    })
}
    
export {postService,postResetService,getService};