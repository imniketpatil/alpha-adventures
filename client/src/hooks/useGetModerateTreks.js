import axios from "axios";

const useGetTrekPriceAsc = async () => {
  // console.log("Moderate");

  const response = await axios.get(
    "http://localhost:8000/api/v1/trek/slider-treks-with-modrate",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  // console.log("response.data.data", response.data.data);

  return response.data.data;
};

export default useGetTrekPriceAsc;
