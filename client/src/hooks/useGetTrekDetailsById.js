import axios from "axios";
import client_url from "../utils/config.js";

const useGetTrekDetailsById = async ({ id }) => {
  try {
    const response = await axios.get(
      `${client_url}/trek/getTrekInfoDataForClientTrekMainPage/${id}`,
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
