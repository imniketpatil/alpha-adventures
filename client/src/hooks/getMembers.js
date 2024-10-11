import axios from "axios";
import client_url from "../utils/config.js";

const getMembers = async () => {
  const response = await axios.get(`${client_url}/trekguide/trekGuides`, {
    withCredentials: true, // To send cookies with the request
  });
  return response.data.data;
};

export default getMembers;
