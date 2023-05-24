import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from "./types";

import AuthService from "../services/auth.service";
import { navigate } from "../../components/navigation/RootNavigation";

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
export const register = (username, password) => async (dispatch) => {
  dispatch(REQUEST());
  try {
    const res = await AuthService.register(username, password);
    if (res.status === 201) {
      dispatch(SUCCESS(res));
      alert("register successfully");
    }
  } catch (error) {
    dispatch(FAIL());
    alert("register fail");
  }
};

export const login = (username, password) => async (dispatch) => {
  dispatch(REQUEST());
  try {
    const res = await AuthService.login(username, password);
    if (res) {
      dispatch(SUCCESS(res));
      navigate("Home");
    }
  } catch (error) {
    dispatch(FAIL());
    alert("Login fail");
  }
};

export const getInfo = () => async (dispatch) => {
  dispatch(REQUEST());
  try {
    const res = await AuthService.getInfo();
    console.log(res);
    if (res.status === 200) {
      dispatch(SUCCESS(res));
    }
  } catch (error) {
    dispatch(FAIL());
    alert("get info fail");
  }
};
