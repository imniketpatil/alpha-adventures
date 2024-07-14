import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TrekGuideTable from "../components/TrekGuideTable";
import CreateTrekGuideForm from "../components/CreateTrekGuideForm";
import TrekDeleteContext from "../context/TrekDeleteContext";
import TrekGuideIdContext from "../context/TrekGuideIdContext";
import { useDeleteTestimonial } from "../hooks/useDeleteTestimonial";
import { useDeleteTrekGuide } from "../hooks/useDeleteTrekGuide";
import EditTrekGuideForm from "../components/EditTrekGuideForm";
import TrekGuideEditContext from "../context/TrekGuideEditContext";

function TrekGuides() {
  const deleteTrekGuideMutation = useDeleteTrekGuide();

  const [OpenTrekGuideForm, setOpenTrekGuideForm] = useState(false);

  const { openDeleteBox, setDeleteBox } = useContext(TrekDeleteContext);

  const { IdValue, setIdValue } = useContext(TrekGuideIdContext);

  const { openEditForm } = useContext(TrekGuideEditContext);

  const handleNewTrekGuide = () => {
    setOpenTrekGuideForm(true);
  };

  const handleConfirmDelete = () => {
    setDeleteBox(false);
    console.log("IdValue", IdValue);
    deleteTrekGuideMutation.mutate(IdValue);
  };

  const handleCancelDelete = () => {
    setDeleteBox(false); // This should set openDeleteBox to false
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
                Trek Guides
              </h1>{" "}
              <button
                className="bg-blue-500 rounded-xl text-xl px-4 py-2 text-white font-medium"
                onClick={handleNewTrekGuide}
              >
                Add New Trek Guide
              </button>
            </div>
            {OpenTrekGuideForm && (
              <CreateTrekGuideForm
                setOpenTrekGuideForm={setOpenTrekGuideForm}
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
                      onClick={handleCancelDelete} // Corrected handler here
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}
            <TrekGuideTable />
            {openEditForm && <EditTrekGuideForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrekGuides;
