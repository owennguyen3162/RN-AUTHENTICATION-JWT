import api from "./api";

const getInformation = () => {
  return api.get("/test/all");
};

const UserService = {
  getInformation,
};

export default UserService;
