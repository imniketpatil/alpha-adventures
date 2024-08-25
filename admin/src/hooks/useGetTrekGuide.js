import axios from "axios";
import client_url from "../utility/config.js";

const useGetTrekGuide = async ({ id }) => {
  try {
    const response = await axios.get(
      `${client_url}/trekguide/trekGuides/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Trek Guide:", error);
    throw new Error("Failed to fetch Trek Guide.");
  }
};

export default useGetTrekGuide;
