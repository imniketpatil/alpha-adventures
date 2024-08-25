import axios from "axios";
import client_url from "../utils/config.js";

const useGetTrekPriceAsc = async (id) => {
  const response = await axios.get(
    `${client_url}/trek/getDateDetailsForClient/${id}`,
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekPriceAsc;
