import axios from "axios";
import client_url from "../utility/config.js";

const useGetTrekTypes = async () => {
  const response = await axios.get(`${client_url}/trektype/getalltrektypes`, {
    withCredentials: true,
  });
  return response.data.data;
};

export default useGetTrekTypes;
