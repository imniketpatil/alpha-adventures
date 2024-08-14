import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const useEditTrek = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => {
      return axios.patch(
        `http://localhost:8000/api/v1/trek/edit-trek/${id}`,
        formData,
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek");
      alert(" Trek Details Updated Successfully");
      // Invalidate and refetch data
      navigate("/treks");
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Trek Updation failed:", error.response.data);
      } else {
        console.error("Trek Updation failed:", error.message);
      }
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default useEditTrek;
