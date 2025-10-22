import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "https://parkingapisenai.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");

      const isAuthRoute =
      config.url?.includes("/auth/login") ||
      config.url?.includes("/auth/register");

      if (token && !isAuthRoute) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      console.warn("Erro ao recuperar token:", e);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;