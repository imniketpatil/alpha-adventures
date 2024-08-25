import axios from "axios";
import client_url from "../utility/config.js";

const useGetTestimonial = async () => {
  const response = await axios.get(
    `${client_url}/testimonial/getAllTestimonials`,
    {
      withCredentials: true,
    }
  );
  return response.data.data;
};

export default useGetTestimonial;
