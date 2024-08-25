// useDeleteTestimonial.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useDeleteTrekType = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (id) => {
      return axios.delete(`${client_url}/trektype/remove-trektype/${id}`, {
        withCredentials: true,
      });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekTypes");
    },
    onError: (error) => {
      console.error("Trek Type deletion failed:", error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export { useDeleteTrekType };
