import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const updateDateDetails = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => {
      return axios.patch(
        `http://localhost:8000/api/v1/trek/edit-date-details/${id}`,
        formData,
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek");
      alert("New Trek Date Added Successfully");
      // Invalidate and refetch data
      navigate("/treks");
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Trek Date Addition failed:", error.response.data);
      } else {
        console.error("Trek Date Addition failed:", error.message);
      }
      // Handle error, such as displaying an error message to the user
    },
  });
};

export default updateDateDetails;
