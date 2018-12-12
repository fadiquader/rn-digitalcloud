import axios from "axios";


export class Auth {

  static login(data) {
    return axios.post('/auth/signin', data)
  }
}

