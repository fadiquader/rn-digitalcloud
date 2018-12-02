import axios from 'axios';

const API_URL = 'http://18.216.232.214:4000/api';

export default () => {
  axios.defaults.baseURL = API_URL
}
