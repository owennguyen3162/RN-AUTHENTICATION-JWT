import api from "./api";
import TokenService from "./token.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
const register = (username, password) => {
  return api.post("/auth/register", {
    username: username,
    password: password,
  });
};

const login = (username, password) => {
  return api
    .post("/auth/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const logout = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("Remove asyncStorage Fail :::" + error);
  }
};

const getCurrentUser = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      const data = await JSON.parse(value);
      return data;
    }
  } catch (e) {
    console.log("getCurrentUser error:::" + e);
  }
};

const getInfo = () => {
  return api.get("/users/profile").then((response) => {
    return response;
  });
};

const AuthService = {
  register,
  login,
  logout,
  getInfo,
  getCurrentUser,
};

export default AuthService;
