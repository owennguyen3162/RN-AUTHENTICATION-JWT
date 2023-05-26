import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  isSignedIn: false,
};

export default function (state = initialState, payload) {
  switch (payload.type) {
    case LOGIN:
      return {
        ...state,
        isSignedIn: payload.isSignedIn,
      };
    case LOGOUT:
      return {
        ...state,
        isSignedIn: payload.isSignedIn,
      };
    default:
      return state;
  }
}
