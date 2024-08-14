import axios from "axios";

const useGetTestimonailById = async ({ id }) => {
  try {
    // console.log("id", id);
    const response = await axios.get(
      `http://localhost:8000/api/v1/testimonial/getAllTestimonial/${id}`,
      {
        withCredentials: true, // To send cookies with the request
      }
    );
    return response.data.data;
  } catch (error) {
    // Handle errors, e.g., log them or throw a custom error
    console.error("Error fetching testimonial:", error);
    throw new Error("Failed to fetch testimonial.");
  }
};

export default useGetTestimonailById;
