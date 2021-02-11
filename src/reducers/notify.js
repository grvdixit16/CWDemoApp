import { notifyConstants } from '../notification/notifyconstant';

export function alert(state = {}, action) {
  switch (action.type) {
    case notifyConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case notifyConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case notifyConstants.CLEAR:
      return {};
    default:
      return state
  }
}