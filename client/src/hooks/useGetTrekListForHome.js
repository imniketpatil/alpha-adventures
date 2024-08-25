import axios from "axios";
import client_url from "../utils/config.js"; // Importing the default export

const useGetTrekListForHome = async () => {
  const response = await axios.get(`${client_url}/trek/get-treks-name`, {
    withCredentials: true, // To send cookies with the request
  });
  return response.data.data;
};

export default useGetTrekListForHome;
