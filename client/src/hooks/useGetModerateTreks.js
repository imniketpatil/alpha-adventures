import axios from "axios";
import client_url from "../utils/config.js";

const useGetTrekPriceAsc = async () => {
  // console.log("Moderate");

  const response = await axios.get(
    `${client_url}/trek/slider-treks-with-modrate`,
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  // console.log("response.data.data", response.data.data);

  return response.data.data;
};

export default useGetTrekPriceAsc;
