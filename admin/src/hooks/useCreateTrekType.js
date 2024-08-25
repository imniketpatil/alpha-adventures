import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useCreateTrekType = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (formData) => {
      return axios.post(`${client_url}/trektype/add-trek-type`, formData, {
        withCredentials: true,
      });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekType");
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Trek Type creation failed:", error.response.data);
      } else {
        console.error("Trek Type creation failed:", error.message);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useCreateTrekType;
