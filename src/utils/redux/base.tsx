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

// Note: this is used as API for Redux, check the commit on 29/1/2022 to see how to create an API

export default api;
