import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import client_url from "../utility/config.js";

const useCreateAccount = () => {
  return useMutation({
    mutationFn: ({ fullName, username, password, authToken }) => {
      return axios.post(
        `${client_url}/users/register`,
        { fullName, username, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Assuming you are using Bearer tokens
          },
        }
      );
    },
    onSuccess: () => {
      // You can add any success handling logic here, like showing a notification
      alert("New  account created");
    },
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
