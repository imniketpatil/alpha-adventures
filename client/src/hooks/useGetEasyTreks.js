import axios from "axios";
import client_url from "../utils/config.js";

const useGetTrekPriceAsc = async () => {
  const response = await axios.get(
    `${client_url}/trek/slider-treks-with-easy`,
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekPriceAsc;