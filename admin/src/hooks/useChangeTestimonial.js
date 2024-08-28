// useChangeTestimonial.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

export const useChangeTestimonial = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: ({ id, formData }) => {
      const hasFile = formData.has("testimonialAvatar"); // Use correct field name

      return axios.patch(
        `${client_url}/testimonial/edit-testimonial/${id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": hasFile
              ? "multipart/form-data"
              : "application/json",
          },
        }
      );
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("testimonials");

      alert("Changes Applied!");
    },
    onError: (error) => {
      console.error("Failed to update testimonial:", error);

      alert("Failed to update testimonial. Please try again.");
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};
