import { all } from 'redux-saga/effects'

import placesSaga from './places';
import authSaga from './auth';

function* rootSaga() {
  yield all([
    placesSaga(),
    authSaga(),
  ])
}

export default rootSaga;
