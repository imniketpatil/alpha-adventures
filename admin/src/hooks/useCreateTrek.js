import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTrek = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      return axios.post(
        "http://localhost:8000/api/v1/trek/create-trek",
        formData,
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek");
      alert("Trek Added Successfully"); // Invalidate and refetch data
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Trek creation failed:", error.response.data);
      } else {
        console.error("Trek creation failed:", error.message);
      }
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useCreateTrek;
