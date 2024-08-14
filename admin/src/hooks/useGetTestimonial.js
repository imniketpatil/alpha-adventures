import axios from "axios";

const useGetTestimonial = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/testimonial/getAllTestimonials",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTestimonial;
