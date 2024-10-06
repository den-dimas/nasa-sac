import axios from "axios";

export const BASE_URL = "https://deploy-nasa-pd51.vercel.app/";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
