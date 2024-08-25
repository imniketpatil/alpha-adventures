import axios from "axios";
import client_url from "../utility/config.js";

const getTrekDetailsById = async (id) => {
  try {
    const response = await axios.get(
      `${client_url}/trek/allTreksForAdmin/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching Trek Date Details:", error);
    throw new Error("Failed to fetch Date Details.");
  }
};

export default getTrekDetailsById;
