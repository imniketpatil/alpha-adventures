// useDeleteTestimonial.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useDeleteTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => {
      return axios.delete(
        `http://localhost:8000/api/v1/testimonial/this_testimonial/${id}`,
        { withCredentials: true } // Send cookies with the request
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("testimonials"); // Invalidate and refetch data
    },
    onError: (error) => {
      console.error("Testimonial deletion failed:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export { useDeleteTestimonial };
