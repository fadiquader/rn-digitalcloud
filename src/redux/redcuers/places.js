
const initialState = {
  loading: false,
  places: [],
}

const placesReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default placesReducer;
