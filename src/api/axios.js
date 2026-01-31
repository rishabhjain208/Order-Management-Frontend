import axios from "axios";

const api = axios.create({
  baseURL: "https://order-management-backend-if9a.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
