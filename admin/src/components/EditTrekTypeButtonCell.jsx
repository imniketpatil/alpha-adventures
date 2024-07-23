// EditButtonCell.jsx
import React, { useContext } from "react";
import TrekTypeEditContext from "../context/TrekTypeEditContext";
import TrekTypeIdContext from "../context/TrekTypeIdContext";
// import TestimonialEditContext from "../context/TestimonialEditContext.js";
// import TestimonialIdContext from "../context/TestimonialIdContext.js";

const EditTrekTypeButtonCell = ({ value }) => {
  const { setIdValue } = useContext(TrekTypeIdContext);

  const { setEditForm } = useContext(TrekTypeEditContext);

  // Handle the edit button click
  const handleEdit = (id) => {
    console.log(`Editing testimonial with ID: ${id}`);
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

export default EditTrekTypeButtonCell;
