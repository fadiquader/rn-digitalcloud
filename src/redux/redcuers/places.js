import * as actions from '../actionsTypes';

const initialState = [];

const placesReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.ADD_PLACE_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default placesReducer;
