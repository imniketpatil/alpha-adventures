import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useDeleteTrekDate = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (id) => {
      return axios.delete(`${client_url}/trek/delete-date/${id}`, {
        withCredentials: true,
      });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek");
    },
    onError: (error) => {
      console.error("Trek Date deletion failed:", error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export { useDeleteTrekDate };
