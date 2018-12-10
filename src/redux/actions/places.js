import { Location } from "../../services";
import * as actions from '../actionsTypes';
import { setLoading } from './loading';

export const addPlace = payload => {
  // return {
  //   type: actions.ADD_PLACE,
  //   payload
  // }
  // from redux thunk
  return async dispatch => {
    // dispatch({
    //   type: actions.SET_LOADING,
    //   payload: {
    //     key: actions.ADD_PLACE_LOADING,
    //     value: true
    //   }
    // });
    dispatch(setLoading({
      key: actions.ADD_PLACE_LOADING,
      value: true
    }));
    try {
      const res = await Location.createLocation(payload);
      dispatch({
        type: actions.ADD_PLACE_SUCCESS,
        payload: res.data.data,
      });
    } catch (e) {

    }
    dispatch(setLoading({
      key: actions.ADD_PLACE_LOADING,
      value: false
    }));
  }
};

export const fetchPlaces = () => {
  return {
    type: actions.FETCH_PLACES,
  }
};

