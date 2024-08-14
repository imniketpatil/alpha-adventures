import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateTrekGuide = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      return axios.post(
        "http://localhost:8000/api/v1/trekguide/add-guide",
        formData,
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekGuides");
      alert("Trek Guide Added Successfully"); // Invalidate and refetch data
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Testimonial creation failed:", error.response.data);
      } else {
        console.error("Testimonial creation failed:", error.message);
      }
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useCreateTrekGuide;
