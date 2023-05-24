import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  LOGIN,
  LOGOUT,
} from "./types";

import AuthService from "../services/auth.service";

const REQUEST = () => {
  return {
    payload: null,
    isLoading: true,
    type: FETCH_REQUEST,
  };
};
const SUCCESS = (data) => {
  return {
    payload: data,
    isLoading: false,
    type: FETCH_SUCCESS,
  };
};

const FAIL = () => {
  return {
    payload: null,
    isLoading: false,
    type: FETCH_FAIL,
  };
};
const IS_LOGIN = () => {
  return {
    type: LOGIN,
    isSignedIn: true,
  };
};
const IS_LOGOUT = () => {
  return {
    type: LOGOUT,
    isSignedIn: false,
  };
};
export const register = (username, password) => async (dispatch) => {
  dispatch(REQUEST());
  try {
    const res = await AuthService.register(username, password);
    if (res.status === 201) {
      alert("register successfully");
      return dispatch(SUCCESS(res));
    }
  } catch (error) {
    alert("register fail");
    return dispatch(FAIL());
  }
};

export const login = (username, password) => async (dispatch) => {
  dispatch(REQUEST());
  try {
    const res = await AuthService.login(username, password);
    if (res) {
      dispatch(SUCCESS(res));
      dispatch(IS_LOGIN());
    }
  } catch (error) {
    alert("Login fail");
    return dispatch(FAIL());
  }
};

export const getInfo = () => async (dispatch) => {
  dispatch(REQUEST());
  try {
    console.log("DA GET INFOR");
    const res = await AuthService.getInfo();
    console.log("RES:::::: " + res);
    if (res.status === 200) {
      return dispatch(SUCCESS(res));
    }
  } catch (error) {
    alert("get info fail");
    return dispatch(FAIL());
  }
};

export const logout = () => async (dispatch) => {
  dispatch(REQUEST());
  AuthService.logout()
    .then(() => dispatch(IS_LOGOUT()))
    .catch((error) => console.log("log out error " + error));
};
