import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useChangeAccountDetails = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ fullName, username }) => {
      return axios.patch(
        "http://localhost:8000/api/v1/users/edit-user",
        { fullName, username },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      // Clear tokens and user info from localStorage
      // Redirect to user page
      navigate("/user");
    },
    onError: (error) => {
      console.error("failed:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useChangeAccountDetails;
