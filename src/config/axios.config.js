import axios from 'axios';

const API_URL = 'http://18.216.232.214:4000/api';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export default () => {
  axios.defaults.baseURL = API_URL
}
