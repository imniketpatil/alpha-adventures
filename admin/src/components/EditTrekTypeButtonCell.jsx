// EditButtonCell.jsx
import React, { useContext } from "react";
import TrekTypeEditContext from "../context/TrekTypeEditContext";
import TrekTypeIdContext from "../context/TrekTypeIdContext";

const EditTrekTypeButtonCell = ({ value }) => {
  const { setIdValue } = useContext(TrekTypeIdContext);

  const { setEditForm } = useContext(TrekTypeEditContext);

  const handleEdit = (id) => {
    setIdValue(id);
    setEditForm(true);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      onClick={() => handleEdit(value)}
    >
      Edit
    </button>
  );
};

export default EditTrekTypeButtonCell;
