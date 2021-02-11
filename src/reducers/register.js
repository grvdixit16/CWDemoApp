import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST
  } from "../action/ActionTypes";

export function registration(state = {}, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { isUserRegistering: true };
    case REGISTER_SUCCESS:
      return {};
    case REGISTER_FAIL:
      return {};
    default:
      return state
  }
}