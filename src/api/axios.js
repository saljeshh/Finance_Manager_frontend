import axios from "axios";

export const axiosWithoutHeader = axios.create({
  baseURL: "http://localhost:8000",
});
