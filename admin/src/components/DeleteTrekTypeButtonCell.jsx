import { useContext, useState } from "react";
import TrekTypeIdContext from "../context/TrekTypeIdContext";
import TrekTypeDeleteContext from "../context/TrekTypeDeleteContext";

const DeleteTrekTypeButtonCell = ({ value }) => {
  const { setDeleteBox } = useContext(TrekTypeDeleteContext);

  const handleDelete = () => {
    setIdValue(value);
    setDeleteBox(true);
  };

  const { setIdValue } = useContext(TrekTypeIdContext);

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

export default DeleteTrekTypeButtonCell;
