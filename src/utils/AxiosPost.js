import axios from "axios";


export async function  axiosPost(values){
    let errorMessage = ''
    await axios.post('https://httpbin.org/post', {values})
        .then((response) => {
          //  errorMessage = response.status;
     }).catch((e) => {
        console.error( e.message)
        errorMessage = e
     })
    return errorMessage
}