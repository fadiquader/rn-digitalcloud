import * as actions from '../actionsTypes';

const initialState = {
  user: {
    firstName: '',
    email: ''
  },
  token: ''
};

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default authReducer;
