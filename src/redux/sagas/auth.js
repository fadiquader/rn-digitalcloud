import { AsyncStorage } from 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects'
import { Auth } from '../../services/Auth';

import * as actions from "../actionsTypes";
import NavigatorService from "../../Navigator/NavigatorService";
import { setToken } from '../../config/axios.config';

function* doLoginAsync(action) {
  const { payload } = action;
  try {
    payload.toggleLoading();
    const res = yield call(Auth.login, payload);
    yield put({
      type: actions.HANDLE_AUTH,
      payload: res.data
    })
    // console.log(res)
  } catch (e) {
    alert(e.message)
  } finally {
    payload.toggleLoading();
  }
}

function* handleAuthAsync(action) {
  try {
    const { payload } = action;
    const data = {
      user: payload.data,
      token: payload.token
    };
    setToken(data.token);
    yield AsyncStorage.setItem('@places:token', data.token);
    yield put({
      type: actions.LOGIN_SUCCESS,
      payload: data
    });
    yield NavigatorService.navigate('App');
  } catch (e) {

  }
}

function* autoLoginAsync() {
  try {
    const token = yield AsyncStorage.getItem('@places:token');

    // console.log('token ', token)
    if(!token) throw new Error('No Token');
    setToken(token);
    yield NavigatorService.navigate('App');
  } catch (e) {
    yield NavigatorService.navigate('Auth');
  }
}

function* logoutAsync() {
  try {
    yield AsyncStorage.removeItem('@places:token');
    yield NavigatorService.navigate('Auth');
  } catch (e) {

  }
}
export default function* authSaga() {
  yield takeLatest(actions.LOGIN, doLoginAsync);
  yield takeLatest(actions.HANDLE_AUTH, handleAuthAsync);
  yield takeLatest(actions.CHECK_AUTH, autoLoginAsync);
  yield takeLatest(actions.LOGOUT, logoutAsync);
}
