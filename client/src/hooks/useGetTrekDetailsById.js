import axios from "axios";
import client_url from "../utils/config.js";
import { useSearchParams } from "react-router-dom";

const useGetTrekDetailsById = async ({ trekId, trekDateId }) => {
  try {
    const response = await axios.get(
      `${client_url}/trek/treks?${trekId ? `trekId=${trekId}` : ""}${
        trekDateId ? `&trekDateId=${trekDateId}` : ""
      }`,
      {
        withCredentials: true, // To send cookies with the request
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching trek details:", error);
    throw new Error("Failed to fetch trek details.");
  }
};

export default useGetTrekDetailsById;
