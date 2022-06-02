import axiosInstance from "../services/axiosInstance";

const AuthAPI = {
  loadUser: () => axiosInstance.get("/auth"),
  login: (formData) => axiosInstance.post("/auth/login", formData),
  signup: (formData) => axiosInstance.post("/auth/register", formData),
  signout: () => axiosInstance.get("/auth/signout")
}

export default AuthAPI;