import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import client_url from "../utility/config.js";

const useChangeAccountDetails = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ fullName, username }) => {
      return axios.patch(
        `${client_url}/users/edit-user`,
        { fullName, username },
        { withCredentials: true }
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
