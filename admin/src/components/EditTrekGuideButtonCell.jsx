// EditButtonCell.jsx
import React, { useContext } from "react";
import TrekGuideEditContext from "../context/TrekGuideEditContext";
import TrekGuideIdContext from "../context/TrekGuideIdContext";

const EditTrekGuideButtonCell = ({ value }) => {
  const { setIdValue } = useContext(TrekGuideIdContext);

  const { setEditForm } = useContext(TrekGuideEditContext);

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

export default EditTrekGuideButtonCell;
