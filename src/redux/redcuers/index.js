import { combineReducers } from 'redux';
import places from './places';
import loading from './loading';
import authReducer from './auth';

export default combineReducers({
  places,
  loading,
  authReducer
  // auth
})
