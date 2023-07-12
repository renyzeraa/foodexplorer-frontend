import axios from "axios";

export const api = axios.create({
  // baseURL: "https://foodexplorerback-end-production.up.railway.app/",
  baseURL: "http://localhost:3000/",
});
