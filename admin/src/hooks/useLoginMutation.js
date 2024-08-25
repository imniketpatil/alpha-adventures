// src/hooks/useLoginMutation.js
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import client_url from "../utility/config.js";

const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ username, password }) => {
      return axios.post(
        `${client_url}/users/login`,
        { username, password },
        { withCredentials: true }
      );
    },
    onSuccess: (response) => {
      const { accessToken, refreshToken, user } = response.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

export default useLoginMutation;
