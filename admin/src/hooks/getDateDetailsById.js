import axios from "axios";
import client_url from "../utility/config.js";

const getDateDetailsById = async (id) => {
  try {
    const response = await axios.get(
      `${client_url}/trek/getDateDetails/${id}`,
      {
        withCredentials: true, // To send cookies with the request
      }
    );

    return response.data.data[0];
  } catch (error) {
    console.error("Error fetching Trek Date Details:", error);
    throw new Error("Failed to fetch Date Details.");
  }
};

export default getDateDetailsById;
