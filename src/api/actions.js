import axios from 'axios';

export const registerApi = (data) =>{
   return axios({
        method: 'post',
        url: 'https://moonsite-rn-test.herokuapp.com/api/usr/register',
        data: data
      }).then(result=>result.data)
}

export const logOut=()=>{
  localStorage.removeItem('userToken')
}

export const loginApi = (data) =>{
    return  axios({
        method: 'post',
        url: 'https://moonsite-rn-test.herokuapp.com/api/usr/login',
        data: data
      }).then(result=>result.data)
      ;
}
export const AddPostApi = (data) =>{
    return axios({
        method: 'post',
        url: 'https://moonsite-rn-test.herokuapp.com/api/post/add-post',
        data: data
      });
}
export const DashBoardApi = () =>{
    return  axios({
        method: 'get',
        url: 'https://moonsite-rn-test.herokuapp.com/api/post/get-all-posts',
        headers:{
          Authorization: localStorage.getItem('userToken')
        },
      }).then(result=>result.data.data)
}

export const GetByIdApi = (data) =>{
  return  axios({
    method: 'get',
    url: 'https://moonsite-rn-test.herokuapp.com/api/post/get-posts-by-user-id',
    headers:{
      Authorization: localStorage.getItem('userToken')
    },
    data:data,

  })
}

export const AddFollower = (data) =>{
  return  axios({
    method: 'post',
    url: 'https://moonsite-rn-test.herokuapp.com/api/follower/add-follower',
    headers:{
      Authorization: localStorage.getItem('userToken')
    },
    data:data,
  })
}


export const GetFollowers = () =>{
  return  axios({
    method: 'get',
    url: 'https://moonsite-rn-test.herokuapp.com/api/follower/get-followers-by-user-id',
    headers:{
      Authorization: localStorage.getItem('userToken')
    },
  }).then(result=>result.data.data)
}

export const GetAllFans = () =>{
  return  axios({
    method: 'get',
    url: 'https://moonsite-rn-test.herokuapp.com/api/follower/get-my-followers',
    headers:{
      Authorization: localStorage.getItem('userToken')
    },
  }).then(result=>result.data.data)
}

export const SubmitPost = (data) =>{
  return  axios({
    method: 'post',
    url: 'https://moonsite-rn-test.herokuapp.com/api/post/add-post',
    headers:{
      Authorization: localStorage.getItem('userToken')
    },
    data:data,

  })
}

export const DeletePost = (data) =>{
  console.log(data);
  
  return  axios({
    method: 'delete',
    url: 'https://moonsite-rn-test.herokuapp.com/api/post/delete-post-by-id/ '+data,
    headers:{
      Authorization: localStorage.getItem('userToken')
    },
  })
}