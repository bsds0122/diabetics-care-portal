import axios from "axios";
import { BASE_URL } from "@/apis/base";

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    Accept: "application/json",
  },
});

/**
 * Add token to every request automatically
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Handle expired or invalid token globally
 */
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401) {
      console.warn("Session expired");

      localStorage.removeItem("token");

      sessionStorage.setItem(
        "auth_message",
        "Your session has expired. Please login again."
      );

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;