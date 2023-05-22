import { combineReducers } from "redux";

import authReducer from "./auth";

const reducer = combineReducers({
  authReducer: authReducer,
});

export default (state, action) => reducer(state, action);
