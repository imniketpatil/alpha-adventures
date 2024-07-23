import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTrekType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      return axios.post(
        "http://localhost:8000/api/v1/trektype/add-trek-type",
        formData,
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekType");
      alert("Trek Type Added Successfully"); // Invalidate and refetch data
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Trek Type creation failed:", error.response.data);
      } else {
        console.error("Trek Type creation failed:", error.message);
      }
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useCreateTrekType;
