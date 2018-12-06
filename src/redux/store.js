import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//
import rootReducer from './redcuers';


let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
}
function configureStore() {
  return createStore(rootReducer, compose(applyMiddleware(thunk,)))
}

export default configureStore;
