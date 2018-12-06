import { SET_LOADING } from "../actionsTypes";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload
  }
}
