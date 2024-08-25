import axios from "axios";
import client_url from "../utility/config.js";

const useGetTrekGuides = async () => {
  const response = await axios.get(`${client_url}/trek/allTreksForAdmin`, {
    withCredentials: true,
  });
  return response.data.data;
};

export default useGetTrekGuides;
