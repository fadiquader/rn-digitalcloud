import * as actions from '../actionsTypes';

const initialState = {
  loading: false,
  places: [],
}

const placesReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.ADD_PLACE:
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    default:
      return state;
  }
};

export default placesReducer;
