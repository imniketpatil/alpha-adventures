// src/hooks/useLogout.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import client_url from "../utility/config.js";

const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ authToken }) => {
      // console.log("authToken for useLogout", authToken);

      return axios.post(
        `${client_url}/users/logout`,
        {},
        {
          // Corrected empty data object
          withCredentials: true, // Ensure credentials are included
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Ensure the token is correct
          },
        }
      );
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
