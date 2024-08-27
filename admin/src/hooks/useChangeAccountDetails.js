import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import client_url from "../utility/config.js";

const useChangeAccountDetails = (authToken) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ fullName, username }) => {
      return axios.patch(
        `${client_url}/users/edit-user`,
        { fullName, username },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // If you are using Bearer tokens
          },
        }
      );
    },
    onSuccess: () => {
      navigate("/user");
    },
    onError: (error) => {
      console.error("failed:", error);
    },
  });
};

export default useChangeAccountDetails;
