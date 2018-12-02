import axios from "axios";


type ILocation = {
  location: {
    latitude: Number,
    longitude: Number,
  },
  name: String,
  picture: String
}

class Location {

  static getAllLocations() {
    return axios.get(`/location/all`)
  }

  static createLocation(data:ILocation) {
    return axios.post('/location/create', data)
  }
}

export { Location }
