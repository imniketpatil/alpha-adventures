// EditButtonCell.jsx
import React, { useContext } from "react";
import TestimonialEditContext from "../context/TestimonialEditContext.js";
import TestimonialIdContext from "../context/TestimonialIdContext.js";

const EditTestimonialButton = ({ value }) => {
  const { setDeleteBox } = useContext(TestimonialEditContext);
  const { setIdValue } = useContext(TestimonialIdContext);

  const handleEdit = (id) => {
    setIdValue(id);
    setDeleteBox(true);
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

export default EditTestimonialButton;
