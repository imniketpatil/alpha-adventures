import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useChangeTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      return axios.patch(
        `http://localhost:8000/api/v1/testimonial/edit-testimonial/${formData.get(
          "id"
        )}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    },
    onSuccess: () => {
      // Clear tokens and user info from localStorage
      // Redirect to user page
      queryClient.invalidateQueries("testimonials");
      alert("Changes Applied !");
    },
    onError: (error) => {
      console.error("failed:", error);
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useChangeTestimonial;
