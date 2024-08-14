import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteTrekDate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => {
      return axios.delete(
        `http://localhost:8000/api/v1/trek/delete-date/${id}`,
        { withCredentials: true } // Send cookies with the request
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek"); // Invalidate and refetch data
    },
    onError: (error) => {
      console.error("Trek Date deletion failed:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export { useDeleteTrekDate };
