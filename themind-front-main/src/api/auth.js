import axios from "./axios";
import { axiosPrivate } from "./axios";

export const register = async (body) => {
  const url = "/auth/register";
  const response = await axios.post(url, body);
  return response.data;
};

export const login = async (body) => {
  const url = "/auth/login";
  const response = await axios.post(url, body);
  return response.data.access_token;
};

export const whoAmI = async () => {
  const url = "/users/me";
  const response = await axiosPrivate.get(url);
  return response.data;
};
