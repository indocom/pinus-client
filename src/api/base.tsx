import { create } from "apisauce";

const api = create({
  baseURL: "https://",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // 10 seconds timeout
  timeout: 10000,
});

export default api;
