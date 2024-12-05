import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TrekDatesContext from "../context/TrekDatesContext";
import client_url from "../utility/config.js";

const addNewDateForTrek = () => {
  const navigate = useNavigate();

  const { setDatesBox } = useContext(TrekDatesContext);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }) => {
      console.log(formData);

      return axios.post(`${client_url}/trek/add-new-date/${id}`, formData, {
        withCredentials: true,
      });
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
