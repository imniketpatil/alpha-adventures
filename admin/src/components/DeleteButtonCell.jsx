import { useState } from "react";
import { useDeleteTestimonial } from "../hooks/useDeleteTestimonial";

const DeleteButtonCell = ({ value }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const deleteTestimonialMutation = useDeleteTestimonial();

  const handleDelete = () => {
    setOpenDelete(true);
  };

  const handleConfirmDelete = () => {
    deleteTestimonialMutation.mutate(value);
    setOpenDelete(false);
  };

  const handleCancelDelete = () => {
    setOpenDelete(false);
  };

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={handleDelete}
      >
        Delete
      </button>
      {openDelete && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <p className="text-lg mb-4">
              Do you really want to delete the testimonial?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButtonCell;
