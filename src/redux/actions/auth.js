import * as actions from '../actionsTypes';

export const login = payload => {
  return {
    type: actions.LOGIN,
    payload
  }
};
