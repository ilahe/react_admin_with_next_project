// Axios
import axios from 'axios'

 const Get = (url,header)=>{
    return new Promise((resolve,reject)=>{
        axios.get(url,header)
            .then(res=>{
                resolve(res.data)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err.response.data)
                // ErrorHandle(err.response.data)
                //errorHandle(err.response.data)
            })
    })
}
 const Post = (url,data,header)=>{
    return new Promise((resolve,reject)=>{
        axios.post(url,data,header)
            .then(res=>{
                resolve(res.data)
            })
            .catch(err=>{
                console.log(err.response.data)
                // ErrorHandle(err.response.data)
            })
    })
}
 const Delete = (url,header)=>{
    return new Promise((resolve,reject)=>{
        axios.delete(url,header)
            .then(res=>{
                resolve(res.data)
                console.log(res.data.data)
            })
            .catch(err=>{
                console.log(err.response.data)
                // ErrorHandle(err.response.data)
            })
    })
}

export {Get,Post,Delete}