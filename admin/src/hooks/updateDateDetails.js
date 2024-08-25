import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const updateDateDetails = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: ({ id, formData }) => {
      return axios.patch(
        `${client_url}/trek/edit-date-details/${id}`,
        formData,
        { withCredentials: true }
      );
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek");
      navigate("/treks");
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Trek Date Addition failed:", error.response.data);
      } else {
        console.error("Trek Date Addition failed:", error.message);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default updateDateDetails;
