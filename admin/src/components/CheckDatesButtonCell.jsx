import { useContext } from "react";
import TrekIdContext from "../context/TrekIdContext";
import TrekDatesContext from "../context/TrekDatesContext";
import AddNewTrekDateTrekIdContext from "../context/AddNewTrekDateTrekIdContext";

const CheckDatesButtonCell = ({ value }) => {
  const { setDatesBox } = useContext(TrekDatesContext);

  const { setIdValue } = useContext(TrekIdContext);
  const { setIdForTrek } = useContext(AddNewTrekDateTrekIdContext);

  const handleCheckDates = () => {
    setDatesBox(true);
    setIdForTrek(value);
    setIdValue(value);
  };

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={handleCheckDates}
      >
        Check Dates
      </button>
    </>
  );
};

export default CheckDatesButtonCell;
