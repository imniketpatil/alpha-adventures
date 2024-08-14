import axios from "axios";

const useGetTrekListForHome = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/trek/get-treks-name",
    {
      withCredentials: true, // To send cookies with the request
    }
  );
  return response.data.data;
};

export default useGetTrekListForHome;
