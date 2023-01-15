import { userConstants } from "../constants";

export function users(state = {}, action) {
  switch (action.type) {
    // get all
    case userConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users,
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    // get sinngle
    case userConstants.GET_SINGLE_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GET_SINGLE_SUCCESS:
      return {
        parameter: action.parameter,
      };
    case userConstants.GET_SINGLE_FAILURE:
      return {
        error: action.error,
      };

    // add
    case userConstants.ADD_REQUEST:
      return {
        loading: true,
      };
    case userConstants.ADD_SUCCESS:
      return {
        parameter: action.parameter,
      };
    case userConstants.ADD_FAILURE:
      return {
        error: action.error,
      };

    // update
    case userConstants.UPDATE_REQUEST:
      return {
        loading: true,
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        parameter: action.parameter,
      };
    case userConstants.UPDATE_FAILURE:
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
