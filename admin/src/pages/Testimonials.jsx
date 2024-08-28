import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TestimonialForm from "../components/TestimonialForm";
import TestimonialsTable from "../components/TestimonialsTable";
import EditTestimonial from "../components/EditTestimonial";
import TestimonialEditContext from "../context/TestimonialEditContext";
import { useDeleteTestimonial } from "../hooks/useDeleteTestimonial";
import TestimonialDeleteContext from "../context/TestimonialDeleteContext";
import TestimonialIdContext from "../context/TestimonialIdContext";
import useIdStore from "../app/IdStore";
import LoadingSpinner from "../components/LoadingSpinner";

function Testimonials() {
  const [openTestimonialForm, setOpenTestimonialForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);

  const loading = useIdStore((state) => state.loading);

  const deleteTestimonialMutation = useDeleteTestimonial();
  const { openDeleteBox, setDeleteBox } = useContext(TestimonialDeleteContext);
  const { IdValue, setIdValue } = useContext(TestimonialIdContext);

  const handleNewTestimonial = () => {
    setOpenTestimonialForm(true);
  };

  const { openTestimonialEditForm, setTestimonialEditForm } = useContext(
    TestimonialEditContext
  );

  const handleConfirmDelete = () => {
    deleteTestimonialMutation.mutate(IdValue);
    setDeleteBox(false);
  };

  const handleCancelDelete = () => {
    setDeleteBox(false);
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="w-1/6 h-screen border-r border-gray-300 shadow-lg">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl px-6 py-4 h-full bg-white shadow-lg overflow-auto">
          <Navbar />
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-medium text-blue-400">
                Testimonials
              </h1>
              <button
                className="bg-blue-500 hover:bg-blue-600 rounded-xl text-xl px-4 py-2 text-white font-medium"
                onClick={handleNewTestimonial}
              >
                Add New Testimonial
              </button>
            </div>
            {openTestimonialForm && (
              <TestimonialForm
                setOpenTestimonialForm={setOpenTestimonialForm}
              />
            )}
            {openDeleteBox && (
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
            {/* {loading && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <LoadingSpinner />
              </div>
            )} */}
            <div className="overflow-auto">
              <TestimonialsTable />
            </div>
          </div>
        </div>
      </div>
      {openTestimonialEditForm && (
        <EditTestimonial setTestimonialEditForm={setTestimonialEditForm} />
      )}
    </div>
  );
}

export default Testimonials;
