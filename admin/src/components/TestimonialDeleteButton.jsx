import { useContext } from "react";
import TestimonialDeleteContext from "../context/TestimonialDeleteContext";
import TestimonialIdContext from "../context/TestimonialIdContext";

const TestimonialDeleteButton = ({ value }) => {
  const { setDeleteBox } = useContext(TestimonialDeleteContext);
  const { setIdValue } = useContext(TestimonialIdContext);

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
