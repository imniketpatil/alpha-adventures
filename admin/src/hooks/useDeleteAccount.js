// src/hooks/useDeleteAccount.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useDeleteAccount = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => {
      return axios.delete(
        "http://localhost:8000/api/v1/users/delete-user",
        { withCredentials: true } // Send cookies with the request
      );
      // Return data if needed
    },
    onSuccess: () => {
      // Clear tokens and user info from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      navigate("/login");
      // Redirect to login page
    },
    onError: (error) => {
      console.error("Account deletion failed:", error);
      // Handle error, such as displaying an error message to the user
      // Example: showErrorMessage(error.message);
    },
  });
};

export default useDeleteAccount;
