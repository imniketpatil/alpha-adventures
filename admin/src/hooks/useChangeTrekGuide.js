import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useChangeTrekGuide = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (formData) => {
      const id = formData.get("id");
      return axios.patch(`${client_url}/trekguide/edit-guide/${id}`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekGuides");
    },
    onError: (error) => {
      console.error("Failed to update Trek Guide:", error);
      alert("Failed to update Trek Guide. Please try again.");
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useChangeTrekGuide;
