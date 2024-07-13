// src/hooks/useLogout.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => {
      return axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      // Clear tokens and user info from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      // Redirect to login page
      navigate("/login");
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useLogout;
