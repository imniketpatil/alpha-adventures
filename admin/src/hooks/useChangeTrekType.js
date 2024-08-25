import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useIdStore from "../app/IdStore";
import client_url from "../utility/config.js";

const useChangeTrekType = () => {
  const queryClient = useQueryClient();
  const setLoading = useIdStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (formData) => {
      const id = formData.get("id");
      return axios.patch(
        `${client_url}/trektype/edit-trektype/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekTypes");
    },
    onError: (error) => {
      console.error("Failed to update Trek Type:", error);
      alert("Failed to update Trek Type. Please try again.");
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

export default useChangeTrekType;
