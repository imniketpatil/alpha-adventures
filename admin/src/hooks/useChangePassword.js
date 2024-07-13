import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const changePasswordMutationFn = ({ oldPassword, newPassword }) => {
  return axios.patch(
    "http://localhost:8000/api/v1/users/change-password",
    { oldPassword, newPassword },
    { withCredentials: true }
  );
};

const useChangePassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: changePasswordMutationFn,
    onSuccess: (response) => {
      console.log("Password changed successfully:", response);
      // Redirect to user page
      navigate("/user");
    },
    onError: (error) => {
      console.error("Failed to change password:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useChangePassword;
