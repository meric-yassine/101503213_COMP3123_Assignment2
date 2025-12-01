import api from "./client";

export const signup = (payload) => api.post("/user/signup", payload);
export const login = (payload) => api.post("/user/login", payload);
