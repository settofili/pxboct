import axios from 'axios';






export function loginUser({email,password}){
    const request = axios.post('api/login',{email,password})
          .then(response => response.data)

  return {
    type: 'USER_LOGIN',
    payload:request
  }
}
