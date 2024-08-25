import axios from "axios";
import client_url from "../utility/config.js";

const useGetTestimonailById = async ({ id }) => {
  try {
    // console.log("id", id);
    const response = await axios.get(
      `${client_url}/testimonial/getAllTestimonial/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    throw new Error("Failed to fetch testimonial.");
  }
};

export default useGetTestimonailById;
