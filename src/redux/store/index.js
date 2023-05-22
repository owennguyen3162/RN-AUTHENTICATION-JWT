import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
const middleware = [thunk];
import reducers from "../reducers";
export const store = createStore(reducers, applyMiddleware(...middleware));
