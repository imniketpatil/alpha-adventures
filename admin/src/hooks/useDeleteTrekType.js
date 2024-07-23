// useDeleteTestimonial.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteTrekType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => {
      return axios.delete(
        `http://localhost:8000/api/v1/trektype/remove-trektype/${id}`,
        { withCredentials: true } // Send cookies with the request
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekTypes"); // Invalidate and refetch data
    },
    onError: (error) => {
      console.error("Trek Type deletion failed:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export { useDeleteTrekType };
