import { useState } from "react";
import { useDeleteTestimonial } from "../hooks/useDeleteTestimonial";
import { useContext } from "react";
import TestimonialDeleteContext from "../context/TestimonialDeleteContext";
import TestimonialIdContext from "../context/TestimonialIdContext";

const DeleteButtonCell = ({ value }) => {
  const { openDeleteBox, setDeleteBox } = useContext(TestimonialDeleteContext);

  const handleDelete = () => {
    setDeleteBox(true);
    setIdValue(value);
  };

  const { IdValue, setIdValue } = useContext(TestimonialIdContext);

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

export default DeleteButtonCell;
