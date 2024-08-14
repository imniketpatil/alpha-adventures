import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TrekGuideTable from "../components/TrekGuideTable";
import CreateTrekGuideForm from "../components/CreateTrekGuideForm";
import TrekDeleteContext from "../context/TrekDeleteContext";
import TrekGuideIdContext from "../context/TrekGuideIdContext";
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
    // console.log("IdValue", IdValue);
    deleteTrekGuideMutation.mutate(IdValue, {
      onSuccess: () => {
        setFeedback("Trek Guide deleted successfully.");
      },
      onError: (error) => {
        setFeedback(
          `Error deleting trek guide: ${
            error.response?.data?.message || error.message
          }`
        );
      },
    });
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
        <div className="font-body text-3xl px-6 py-4 h-screen bg-white shadow-lg overflow-auto">
          <Navbar />
          <hr className="border-t-2 border-gray-300 mt-2 mb-4" />
          <div className="w-full">
            <div className="flex w-full justify-between items-center mb-5">
              <h1 className="text-3xl font-semibold text-blue-500">
                Trek Guides
              </h1>
              <button
                className="bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out rounded-xl text-lg px-5 py-3 text-white font-medium shadow-md"
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
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-lg mb-4">
                    Do you really want to delete the trek guide?
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out text-white py-2 px-4 rounded shadow-md"
                      onClick={handleConfirmDelete}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 transition duration-200 ease-in-out text-gray-800 py-2 px-4 rounded shadow-md"
                      onClick={handleCancelDelete}
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
