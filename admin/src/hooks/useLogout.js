// src/hooks/useLogout.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import client_url from "../utility/config.js";

const useLogout = (authToken) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => {
      return axios.post(`${client_url}/users/logout`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // If you are using Bearer tokens
        },
      });
    },
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      navigate("/login");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};

export default useLogout;
