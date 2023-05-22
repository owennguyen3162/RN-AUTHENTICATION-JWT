import axiosInstance from "./api";
import TokenService from "./token.service";
import { refreshToken } from "../actions/auth";

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      const token = await TokenService.getLocalAccessToken();
      if (token) {
        config.headers["x_authorization"] = token;
      }
      return config;
    },
    (error) => {
      console.log("REQUEST ::::" + error.response.status);
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== "/auth/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          const RefreshToken = await TokenService.getLocalRefreshToken();
          console.log(RefreshToken);
          try {
            const rs = await axiosInstance.post("/auth/refresh", {
              refreshToken: RefreshToken,
            });

            const { accessToken } = rs.data;

            // dispatch(refreshToken(accessToken));
            await TokenService.updateLocalAccessToken(accessToken);

            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;
