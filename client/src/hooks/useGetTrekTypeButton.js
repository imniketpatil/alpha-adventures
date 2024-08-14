import axios from "axios";

const useGetTrekPriceDesc = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/trektype/getalltrektypes",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekPriceDesc;
