import axiosInstance from "../services/axiosInstance";

const AuthAPI = {
  loadUser: () => axiosInstance.get("/auth"),
  login: (formData) => axiosInstance.post("/auth/login", formData),
  signup: (formData) => axiosInstance.post("/auth/register", formData)
}

export default AuthAPI;