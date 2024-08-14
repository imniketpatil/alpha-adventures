import { useContext } from "react";
import TrekIdContext from "../context/TrekIdContext";
import { useNavigate } from "react-router-dom";
import TrekDatesContext from "../context/TrekDatesContext";
import AddNewTrekDateTrekIdContext from "../context/AddNewTrekDateTrekIdContext";
import DateIdContext from "../context/DateIdContext";

const CheckDatesButtonCell = ({ value }) => {
  const { openDatesBox, setDatesBox } = useContext(TrekDatesContext);

  const { IdValue, setIdValue } = useContext(TrekIdContext);
  const { IdForTrek, setIdForTrek } = useContext(AddNewTrekDateTrekIdContext);

  const navigate = useNavigate();

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
