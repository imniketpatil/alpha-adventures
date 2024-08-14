import axios from "axios";

const getDateDetailsById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/trek/getDateDetails/${id}`,
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
