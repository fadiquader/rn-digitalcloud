import * as actions from '../actionsTypes';
const initialState = {};

const loadingReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state
  }
};

export default loadingReducer;
