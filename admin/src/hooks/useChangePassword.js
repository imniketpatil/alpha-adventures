import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import client_url from "../utility/config.js";

const changePasswordMutationFn = ({ oldPassword, newPassword, authToken }) => {
  return axios.patch(
    `${client_url}/users/change-password`,
    { oldPassword, newPassword },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`, // If you are using Bearer tokens
      },
    }
  );
};

const useChangePassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: changePasswordMutationFn,
    onSuccess: (response) => {
      navigate("/user");
    },
    onError: (error) => {
      console.error("Failed to change password:", error);
    },
  });
};

export default useChangePassword;
