import {
  GETALLUSERS_REQUEST,GETALLUSERS_SUCCESS,GETALLUSERS_FAILURE,DELETEUSER_REQUEST,DELETEUSER_SUCCESS,DELETEUSER_FAILURE
}from "../action/ActionTypes";

export function users(state = {}, action) {
  switch (action.type) {
    case GETALLUSERS_REQUEST:
      return {
        loading: true
      };
    case GETALLUSERS_SUCCESS:
      return {
        items: action.users
      };
    case GETALLUSERS_FAILURE:
      return { 
        error: action.error
      };
    case DELETEUSER_REQUEST:
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case DELETEUSER_SUCCESS:
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case DELETEUSER_FAILURE:
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            const { deleting, ...userCopy } = user;
            return { ...userCopy, deleteError: action.error };
          }
          return user;
        })
      };
    default:
      return state
  }
}