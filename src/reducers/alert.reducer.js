import { alertConstants } from "../constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: "success",
        description: "Operation successful",
        message: action?.message,
      };
    case alertConstants.ERROR:
      return {
        type: "error",
        description: "Operation failed",
        message: action?.message,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
