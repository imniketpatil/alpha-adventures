import axios from "axios";
import client_url from "../utils/config.js";

const useGetTrekListForHome = async () => {
  const response = await axios.get(
    `${client_url}/trek/slider-all-treks-sortbydate`,
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekListForHome;
