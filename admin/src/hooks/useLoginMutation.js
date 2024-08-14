// src/hooks/useLoginMutation.js
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ username, password }) => {
      return axios.post(
        "http://localhost:8000/api/v1/users/login",
        { username, password },
        { withCredentials: true }
      );
    },
    onSuccess: (response) => {
      const { accessToken, refreshToken, user } = response.data.data;

      // Store tokens in localStorage (or secure storage) for subsequent requests
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Optionally, store user information if needed
      localStorage.setItem("user", JSON.stringify(user));

      // console.log("Login successful");
      // Navigate to the desired page
      navigate("/home");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useLoginMutation;
