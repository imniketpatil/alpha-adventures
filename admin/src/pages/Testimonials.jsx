import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TestimonialForm from "../components/TestimonialForm";
import TestimonialsTable from "../components/TestimonialsTable";
import EditTestimonial from "../components/EditTestimonial";
import TestimonialEditContext from "../context/TestimonialEditContext";

function Testimonials() {
  const [openTestimonialForm, setOpenTestimonialForm] = useState(false);

  const { openEditForm } = useContext(TestimonialEditContext);

  const handleNewTestimonial = () => {
    setOpenTestimonialForm(true);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/6 h-screen border-r-2 border-gray-300">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl flex-grow px-4 pb-4 h-screen bg-white">
          <Navbar />
          <hr className="border-1 border-gray-300" />
          <div className="w-full mt-5 ">
            <div className="flex w-full justify-between items-center my-5">
              <h1 className="text-2xl font-medium text-blue-400">
                Testimonials
              </h1>{" "}
              <button
                className="bg-blue-500 rounded-xl text-xl px-4 py-2 text-white font-medium"
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
            <TestimonialsTable />
          </div>
        </div>
      </div>
      {openEditForm && <EditTestimonial />}
    </div>
  );
}

export default Testimonials;
