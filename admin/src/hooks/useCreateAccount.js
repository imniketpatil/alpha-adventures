import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import client_url from "../utility/config.js";

const useCreateAccount = () => {
  return useMutation({
    mutationFn: ({ fullName, username, password }) => {
      return axios.post(
        `${client_url}/users/register`,
        { fullName, username, password },
        { withCredentials: true }
      );
    },
    onSuccess: () => {},
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Account creation failed:", error.response.data);
      } else {
        console.error("Account creation failed:", error.message);
      }
    },
  });
};

export default useCreateAccount;
