import * as actions from '../actionsTypes';

export const addPlace = payload => {
  return {
    type: actions.ADD_PLACE,
    payload
  }
};
