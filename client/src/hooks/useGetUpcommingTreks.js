import axios from "axios";

const useGetTrekListForHome = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/trek/slider-all-treks-sortbydate",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekListForHome;
