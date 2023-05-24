import { LOGIN, REFRESH_TOKEN, REGISTER, GET_INFO } from "./types";

import AuthService from "../services/auth.service";
import { navigate } from "../../components/navigation/RootNavigation";

export const register = (username, password) => async (dispatch) => {
  try {
    const res = await AuthService.register(username, password);
    if (res.status === 201) {
      alert("REGISTER DONE");
    }
  } catch (error) {
    alert("Register fail :::" + error);
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    const res = await AuthService.login(username, password);
    if (res) {
      dispatch({ payload: res, type: LOGIN });
      navigate("Home");
    }
  } catch (error) {
    alert("LOGIN FAIL :::" + error);
  }
};

export const getInfo = () => async (dispatch) => {
  try {
    const res = await AuthService.getInfo();
    if (res) {
      dispatch({ payload: res, type: GET_INFO });
    }
  } catch (error) {
    alert("GET INFO FAIL:::" + error);
  }
};

export const logout = {};

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};
