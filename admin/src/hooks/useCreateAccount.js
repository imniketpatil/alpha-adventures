// src/hooks/useCreateAccount.js
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const useCreateAccount = () => {
  return useMutation({
    mutationFn: ({ fullName, username, password }) => {
      return axios.post(
        "http://localhost:8000/api/v1/users/register",
        { fullName, username, password },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      console.log("Account creation successful");
      // Navigate to the desired page
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Account creation failed:", error.response.data);
      } else {
        console.error("Account creation failed:", error.message);
      }
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useCreateAccount;
