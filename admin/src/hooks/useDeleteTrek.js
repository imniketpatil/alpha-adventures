import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useDeleteTrek = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (id) => {
      return axios.delete(`${client_url}/trek/delete-trek/${id}`, {
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
      console.error("Trek deletion failed:", error);

      alert("Failed to delete trek. Please try again.");
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export { useDeleteTrek };
