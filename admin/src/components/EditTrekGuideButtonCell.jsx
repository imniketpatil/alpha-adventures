// EditButtonCell.jsx
import React, { useContext } from "react";
import TrekGuideEditContext from "../context/TrekGuideEditContext";
import TrekGuideIdContext from "../context/TrekGuideIdContext";
// import TestimonialEditContext from "../context/TestimonialEditContext.js";
// import TestimonialIdContext from "../context/TestimonialIdContext.js";

const EditTrekGuideButtonCell = ({ value }) => {
  const { setIdValue } = useContext(TrekGuideIdContext);

  const { setEditForm } = useContext(TrekGuideEditContext);

  // Handle the edit button click
  const handleEdit = (id) => {
    // console.log(`Editing testimonial with ID: ${id}`);
    setIdValue(id);

    setEditForm(true); // Assuming you're setting editForm to true
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
