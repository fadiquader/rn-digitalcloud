import { call, put, takeLatest } from 'redux-saga/effects'
//
import { Location } from "../../services";
import * as actions from '../actionsTypes';
import { setLoading } from "../actions/loading";
import NavigatorService from "../../Navigator/NavigatorService";

function* fetchPlaces() {
  try {
    // action.payload
    yield put(setLoading({
      key: actions.FETCH_PLACES_LOADING,
      value: true
    }));
    const res = yield call(Location.getAllLocations);
    yield put({type: actions.FETCH_PLACESS_SUCCESS, payload: res.data.locations});
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
  yield put(setLoading({
    key: actions.FETCH_PLACES_LOADING,
    value: false
  }))
}

function* deletePlace(action) {
  const { id } = action.payload;
  try {
    yield call(Location.deleteLocationById, id);
    yield NavigatorService.goBack();
    yield put({
      type: actions.DELETE_PLACE_SUCCESS,
      payload: action.payload,
    })
  } catch (e) {
    alert(e.message)
  }
}
export default function* placesSaga() {
  yield takeLatest(actions.FETCH_PLACES, fetchPlaces);
  yield takeLatest(actions.DELETE_PLACE, deletePlace);
}
