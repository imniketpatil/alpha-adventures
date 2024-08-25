import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useEditTrek = () => {
  const navigate = useNavigate();
  const setLoading = useIdStore((state) => state.setLoading);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => {
      return axios.patch(`${client_url}/trek/edit-trek/${id}`, formData, {
        withCredentials: true,
      });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek");
      setLoading(false);
      navigate("/treks");
    },
    onError: (error) => {
      setLoading(false);
      if (error.response && error.response.data) {
        console.error("Trek Updation failed:", error.response.data);
      } else {
        console.error("Trek Updation failed:", error.message);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useEditTrek;
