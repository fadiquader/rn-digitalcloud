import axios from 'axios';
import { Platform } from 'react-native';

// axios.defaults.timeout = 1000 * 60;
// https://pacific-spire-85288.herokuapp.com/
// const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:400/api' : 'http://localhost:4000/api';
// const API_URL = 'https://pacific-spire-85288.herokuapp.com/api';
const API_URL = 'http://18.216.232.214:4000/api';

export const createLocation = data => {
  return axios.post(`${API_URL}/location/create`, data);
};
export const deleteAllLocations = () => {
  return axios.delete(`${API_URL}/location//delete-all`);
};

export const getAllLocations = () => {
  return axios.get(`${API_URL}/location/all`);
};
