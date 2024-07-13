import axios from "axios";

const useGetTestimonial = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/testimonial/testimonials",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTestimonial;
