import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import AddNewTrekDateTrekIdContext from "../context/AddNewTrekDateTrekIdContext";
import { useContext } from "react";
import TrekDatesContext from "../context/TrekDatesContext";

const addNewDateForTrek = () => {
  const navigate = useNavigate();

  const { IdForTrek, setIdForTrek } = useContext(AddNewTrekDateTrekIdContext);
  const { openDatesBox, setDatesBox } = useContext(TrekDatesContext);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => {
      return axios.post(
        `http://localhost:8000/api/v1/trek/add-new-date/${id}`,
        formData,
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries("Trek");
      setDatesBox(false);
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

export default addNewDateForTrek;
