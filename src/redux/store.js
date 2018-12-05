import { createStore } from 'redux';
//
import rootReducer from './redcuers';

function configureStore() {
  return createStore(rootReducer)
}

export default configureStore;
