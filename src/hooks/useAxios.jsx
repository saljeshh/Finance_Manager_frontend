import axios from "axios";
import { useAuth } from "../context/auth-context";

export const useAxios = () => {
  const { token } = useAuth();
  return axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
