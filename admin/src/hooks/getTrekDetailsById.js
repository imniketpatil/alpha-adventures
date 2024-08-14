import axios from "axios";

const getTrekDetailsById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/trek/allTreksForAdmin/${id}`,
      {
        withCredentials: true, // To send cookies with the request
      }
    );
    // console.log("response.data.data", response.data.data);

    return response.data.data;
  } catch (error) {
    console.error("Error fetching Trek Date Details:", error);
    throw new Error("Failed to fetch Date Details.");
  }
};

export default getTrekDetailsById;
