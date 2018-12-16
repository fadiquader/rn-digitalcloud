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
    case actions.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state
  }
};

export default authReducer;
