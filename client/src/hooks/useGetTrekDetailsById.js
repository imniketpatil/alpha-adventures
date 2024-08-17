import axios from "axios";

const useGetTrekDetailsById = async ({ id }) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/trek/getTrekInfoDataForClientTrekMainPage/${id}`,
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
