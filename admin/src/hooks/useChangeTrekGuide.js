import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useChangeTrekGuide = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => {
      const id = formData.get("id");
      return axios.patch(
        `http://localhost:8000/api/v1/trekguide/edit-guide/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("TrekGuides");
      alert("Changes Applied!");
    },
    onError: (error) => {
      console.error("Failed to update Trek Guide:", error);
      alert("Failed to update Trek Guide. Please try again.");
    },
  });
};

export default useChangeTrekGuide;
