import axios from "axios";
import client_url from "../utility/config.js";

const useGetTrekType = async ({ id }) => {
  try {
    // console.log("id", id);
    const response = await axios.get(
      `${client_url}/trektype/gettrektype/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Trek Type:", error);
    throw new Error("Failed to fetch Trek Type.");
  }
};

export default useGetTrekType;
