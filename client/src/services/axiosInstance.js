import axios from "axios";
const baseURL = "http://localhost:3002/api/v1";

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
})

export default axiosInstance;