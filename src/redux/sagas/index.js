import { all } from 'redux-saga/effects'

import placesSaga from './places';

function* rootSaga() {
  yield all([
    placesSaga(),

  ])
}

export default rootSaga;
