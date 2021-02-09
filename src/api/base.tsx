import { create } from "apisauce";

const api = create({
  baseURL: "https://",
  headers: {
    // eslint-disable-next-line prettier/prettier
    Connection: "keep-alive",
    "Accept-Language": "en-US,en;q=0.8",
  },
  // 10 seconds timeout
  timeout: 10000,
});

export default api;
