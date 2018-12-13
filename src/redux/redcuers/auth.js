import * as actions from '../actionsTypes';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    _id: ''
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
