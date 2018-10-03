import axios from 'axios';

const postService=(url,data) =>{
    return axios({
        method: 'post',
        url:url,
        headers:{
            ContentType : 'application/json',
        },
        data: data,
    })
    
   
}
export {postService};