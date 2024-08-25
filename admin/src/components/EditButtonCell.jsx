// EditButtonCell.jsx
import React, { useContext } from "react";
import TestimonialEditContext from "../context/TestimonialEditContext.js";
import TestimonialIdContext from "../context/TestimonialIdContext.js";

const EditButtonCell = ({ value }) => {
  const { openTestimonialEditForm, setTestimonialEditForm } = useContext(
    TestimonialEditContext
  );
  const { setIdValue } = useContext(TestimonialIdContext);

  // Handle the edit button click
  const handleEdit = (id) => {
    setIdValue(id);
    setTestimonialEditForm(true);
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

export default EditButtonCell;
