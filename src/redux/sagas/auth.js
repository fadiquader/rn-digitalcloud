import { call, put, takeLatest } from 'redux-saga/effects'
import { Auth } from '../../services/Auth';

import * as actions from "../actionsTypes";

function* doLoginAsync(action) {
  try {
    const { payload } = action;
    const res = yield call(Auth.login, payload);
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}

export default function* authSaga() {
  yield takeLatest(actions.LOGIN, doLoginAsync);
}
