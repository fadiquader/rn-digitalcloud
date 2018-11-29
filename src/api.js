import axios from 'axios';

const API_URL = 'http://18.216.232.214:4000/api';

export const createPlace = data => {
  return axios.post(`${API_URL}/location/create`, data)
}

export const getAllPlaces = () => {
  return axios.get(`${API_URL}/location/all`)
};
