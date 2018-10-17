import axios from 'axios';

let postService=(url,data) =>{
    console.log('data of user is',url,data);
    return axios({
        method: 'POST',
        url:url,
        headers:{
            'Content-Type' : 'application/json',
            'token': localStorage.getItem("token")
        },
        data: data,
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
let postImageService=(url,data) =>{
    console.log('data of user is',url,data);
    return axios({
        method: 'POST',
        url:url,
        headers:{
         
        },
        data: data,
}) 
}

let putService=(url,data) =>{
    console.log('data of user is',url,data);
    return axios({
        method: 'PUT',
        url:url,
        headers:{
			"Content-Type":"application/json",
            'token': localStorage.getItem('token')
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

 const deleteService=(data,url) =>{
console.log('data in delete note service',data,url);
return axios({
    method:'DELETE',
    url:url,
    data:data
})
 }
    
export {postService,postResetService,getService,postImageService,putService,deleteService};