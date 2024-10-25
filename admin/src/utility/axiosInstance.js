import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-alpha-adventures.onrender.com/api/v1", // Adjust the base URL as necessary
  withCredentials: true, // Include credentials (cookies, etc.) with each request
});

export default axiosInstance;
