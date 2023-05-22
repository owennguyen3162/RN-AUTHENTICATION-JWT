import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFRESH_TOKEN, REGISTER, LOGIN, GET_INFO } from "../actions/types";

const user = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      const user = await JSON.parse(value);
      console.log("USER STROGE ::: " + user);
      return user;
    }
  } catch (e) {
    console.log("getLocalRefreshToken error:::" + e);
  }
};

// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

const initialState = {
  data: null,
};

export default function (state = initialState, payload) {
  switch (payload.type) {
    case REFRESH_TOKEN:
      return {
        ...state,
        data: payload.payload,
      };
    case REGISTER:
      return {
        ...state,
      };
    case LOGIN:
      return {
        ...state,
        data: payload.payload,
      };
      case GET_INFO:
        return {
          ...state,
          data: payload.payload,
        };
    default:
      return state;
  }
}
