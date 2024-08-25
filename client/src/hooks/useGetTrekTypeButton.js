import axios from "axios";
import client_url from "../utils/config.js";

const useGetTrekPriceDesc = async () => {
  const response = await axios.get(`${client_url}/trektype/getalltrektypes`, {
    withCredentials: true, // To send cookies with the request
  });
  return response.data.data;
};

export default useGetTrekPriceDesc;
