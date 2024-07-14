import { useContext, useState } from "react";
import TrekDeleteContext from "../context/TrekDeleteContext";
import TrekGuideIdContext from "../context/TrekGuideIdContext";
// import { useDeleteTestimonial } from "../hooks/useDeleteTestimonial";

const DeleteTrekGuideButtonCell = ({ value }) => {
  const { setDeleteBox } = useContext(TrekDeleteContext);

  const handleDelete = () => {
    console.log("value at delte trek guide", value);
    setIdValue(value);
    setDeleteBox(true);
  };

  const { IdValue, setIdValue } = useContext(TrekGuideIdContext);

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

export default DeleteTrekGuideButtonCell;
