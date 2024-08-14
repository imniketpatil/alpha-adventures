import { useContext } from "react";
import TrekDeleteContext from "../context/TrekDeleteContext";
import TrekIdContext from "../context/TrekIdContext";
import TestimonialDeleteContext from "../context/TestimonialDeleteContext";
import TestimonialIdContext from "../context/TestimonialIdContext";

const TestimonialDeleteButton = ({ value }) => {
  const { openDeleteBox, setDeleteBox } = useContext(TestimonialDeleteContext);
  const { IdValue, setIdValue } = useContext(TestimonialIdContext);

  const handleDelete = () => {
    setDeleteBox(true);
    setIdValue(value);
  };

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};

export default TestimonialDeleteButton;
