import axios from "axios";
import client_url from "../utils/config.js";

const useGetTestimonials = async () => {
  const response = await axios.get(
    `${client_url}/testimonial/getAllTestimonials`,
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTestimonials;
