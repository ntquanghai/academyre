import axiosInstance from "../services/axiosInstance";

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    axiosInstance.defaults.headers.common["x-auth-token"] = token;
  } else {
    localStorage.removeItem("token");
    delete axiosInstance.defaults.headers.common["x-auth-token"];
  }
};
