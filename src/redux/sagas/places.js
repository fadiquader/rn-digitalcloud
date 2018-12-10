import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
//
import { Location } from "../../services";
import * as actions from '../actionsTypes';
import { setLoading } from "../actions/loading";

function* fetchPlaces(action) {
  try {
    // action.payload
    yield put(setLoading({
      key: actions.FETCH_PLACES_LOADING,
      value: true
    }));
    const res = yield call(Location.getAllLocations);
    console.log(res.data)
    yield put({type: actions.FETCH_PLACESS_SUCCESS, payload: res.data.locations});
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
  yield put(setLoading({
    key: actions.FETCH_PLACES_LOADING,
    value: false
  }))
}

export default function* placesSaga() {
  console.log('placesSaga')
  yield takeLatest(actions.FETCH_PLACES, fetchPlaces);
}
