import { combineReducers } from "redux";

import API from "./api";
import isSignedIn from "./auth";

const reducer = combineReducers({
  authReducer: API,
  isSignedIn: isSignedIn,
});

export default (state, action) => reducer(state, action);
