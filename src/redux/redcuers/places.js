import * as actions from '../actionsTypes';

const initialState = [];

const placesReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.ADD_PLACE_SUCCESS:
      return [...state, action.payload];
    case actions.FETCH_PLACESS_SUCCESS:
      return [...action.payload];
    case actions.DELETE_PLACE_SUCCESS:
      return state.filter(place => place._id !== action.payload.id);
    default:
      return state;
  }
};

export default placesReducer;
