// useDeleteTestimonial.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useDeleteTestimonial = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (id) => {
      return axios.delete(`${client_url}/testimonial/this_testimonial/${id}`, {
        withCredentials: true,
      });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("testimonials");
    },
    onError: (error) => {
      console.error("Testimonial deletion failed:", error);
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export { useDeleteTestimonial };
