import * as actions from '../actionsTypes';

export const login = payload => {
  return {
    type: actions.LOGIN,
    payload
  }
};

export const checkAuth = () => {
  return {
    type: actions.CHECK_AUTH,
  }
};

export const logout = () => {
  return {
    type: actions.LOGOUT,
  }
};
