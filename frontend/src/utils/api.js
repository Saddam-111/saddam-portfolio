import axios from "axios";

// Base URL of your backend API
const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, // replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT token automatically to every request if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Response interceptor for handling global errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("rememberMe");
      if (!window.location.pathname.startsWith("/admin")) return Promise.reject(error);
      window.location.replace("/admin");
    }
    return Promise.reject(error);
  }
);

export default API;
