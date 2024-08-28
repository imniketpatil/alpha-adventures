import axios from "axios";
import client_url from "../utility/config.js";

const getTrekDates = async (id) => {
  try {
    console.log("Run");
    const response = await axios.get(`${client_url}/trek/getTrekDates/${id}`, {
      withCredentials: true,
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching Trek Details:", error);
    throw new Error("Failed to fetch Details.");
  }
};

export default getTrekDates;
