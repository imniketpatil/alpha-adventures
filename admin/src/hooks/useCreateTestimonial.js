import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useCreateTestimonial = () => {
  const queryClient = useQueryClient();

  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (formData) => {
      return axios.post(
        `${client_url}/testimonial/create-testimonial`,
        formData,
        { withCredentials: true }
      );
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("testimonials");
      setLoading(false);
      setOpenTestimonialForm(false);
    },
    onError: (error) => {
      setLoading(false);

      if (error.response && error.response.data) {
        console.error("Testimonial creation failed:", error.response.data);
      } else {
        console.error("Testimonial creation failed:", error.message);
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useCreateTestimonial;
