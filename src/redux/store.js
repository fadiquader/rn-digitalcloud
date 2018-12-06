import { createStore, compose, applyMiddleware } from 'redux';
//
import rootReducer from './redcuers';

let composeEnhancers = compose;

if (__DEV__) {
  // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

function configureStore() {
  return createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore;
