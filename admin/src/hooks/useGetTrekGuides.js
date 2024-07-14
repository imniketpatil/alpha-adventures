import axios from "axios";

const useGetTrekGuides = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/trekguide/trekGuides",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekGuides;
