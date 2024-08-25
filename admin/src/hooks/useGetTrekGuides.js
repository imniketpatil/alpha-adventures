import axios from "axios";
import client_url from "../utility/config.js";

const useGetTrekGuides = async () => {
  const response = await axios.get(`${client_url}/trekguide/trekGuides`, {
    withCredentials: true,
  });
  return response.data.data;
};

export default useGetTrekGuides;
