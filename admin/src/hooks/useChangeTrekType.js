import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useChangeTrekType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      const id = formData.get("id");
      return axios.patch(
        `http://localhost:8000/api/v1/trektype/edit-trektype/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekTypes");
      alert("Changes Applied!");
    },
    onError: (error) => {
      console.error("Failed to update Trek Type:", error);
      alert("Failed to update Trek Type. Please try again.");
    },
  });
};

export default useChangeTrekType;
