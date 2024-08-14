import axios from "axios";

const useGetTrekPriceDesc = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/trek/slider-all-treks-sortbypricedesc",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekPriceDesc;
