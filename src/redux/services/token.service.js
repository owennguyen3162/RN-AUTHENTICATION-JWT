import AsyncStorage from "@react-native-async-storage/async-storage";

const getLocalRefreshToken = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      const user = await JSON.parse(value);
      // console.log("getLocalRefreshToken::: " + user.refreshToken);
      return user.refreshToken;
    }
  } catch (e) {
    console.log("getLocalRefreshToken error:::" + e);
  }
};

const getLocalAccessToken = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      const user = await JSON.parse(value);
      return user.accessToken;
    }
  } catch (e) {
    console.log("getLocalAccessToken error:::" + e);
  }
};

const updateLocalAccessToken = async (token) => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      const user = await JSON.parse(value);
      // console.log("updateLocalAccessToken::: " + token);
      user.accessToken = token;
      try {
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem("user", jsonValue);
      } catch (e) {
        console.log("UPDATE ACCESSTOKEN ERROR::: " + e);
      }
    }
  } catch (e) {
    console.log("getLocalAccessToken error:::" + e);
  }
};

const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      const user = await JSON.parse(value);
      return user;
    }
  } catch (e) {
    console.log("getLocalAccessToken error:::" + e);
  }
};

const setUser = async (user) => {
  // console.log("SETUSER ::: " + JSON.stringify(user));
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem("user", jsonValue);
    console.log("SETUSER OK");
  } catch (e) {
    console.log("SetUser error::: " + e);
  }
};

const removeUser = async () => {
  try {
    await AsyncStorage.clear();
    console.log("Logout Done");
  } catch (error) {
    console.log("Remove asyncStorage Fail :::" + error);
  }
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default TokenService;
