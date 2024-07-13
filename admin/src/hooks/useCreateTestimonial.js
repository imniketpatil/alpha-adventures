import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useCreateTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      return axios.post(
        "http://localhost:8000/api/v1/testimonial/create-testimonial",
        formData,
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("testimonials");
      alert("Testimonial Created Successfully"); // Invalidate and refetch data
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

export default useCreateTestimonial;
