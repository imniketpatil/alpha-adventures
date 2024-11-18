import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useCreateTrek = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (formData) => {
      // console.log(formData);

      return axios.post(`${client_url}/trek/create-trek`, formData, {
        withCredentials: true,
      });
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
        console.error("Trek creation failed:", error.response.data);
      } else {
        console.error("Trek creation failed:", error.message);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useCreateTrek;
