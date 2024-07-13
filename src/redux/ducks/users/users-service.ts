import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
});

const getRequest = async (endPoint: string) => {
  try {
    return await api.get(endPoint, {
      headers: { "app-id": "665f80c0eb3728ea7de386fb" },
    });
  } catch (error) {
    return error;
  }
};

const UsersService = {
  api,
  getRequest,
};

export default UsersService;
