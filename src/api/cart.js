import api from "./axios";

export const addToCart = (menuItemId) =>
  api.post("/cart/add", { menuItemId });

export const getCart = () => api.get("/cart");

export const checkoutCart = (data) =>
  api.post("/cart/checkout", data);
