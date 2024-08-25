import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TrekTypeTable from "../components/TrekTypeTable";
import CreateTrekTypeForm from "../components/CreateTrekTypeForm";
import TrekTypeDeleteContext from "../context/TrekTypeDeleteContext";
import TrekTypeIdContext from "../context/TrekTypeIdContext";
import EditTrekTypeForm from "../components/EditTrekTypeForm";
import TrekTypeEditContext from "../context/TrekTypeEditContext";
import { useDeleteTrekType } from "../hooks/useDeleteTrekType";
import useIdStore from "../app/IdStore";
import LoadingSpinner from "../components/LoadingSpinner";

function TrekTypes() {
  const deleteTrekTypeMutation = useDeleteTrekType();

  const loading = useIdStore((state) => state.loading);

  const [openTrekTypeForm, setOpenTrekTypeForm] = useState(false);

  const { openDeleteBox, setDeleteBox } = useContext(TrekTypeDeleteContext);

  const { IdValue } = useContext(TrekTypeIdContext);

  const { openEditForm, setEditForm } = useContext(TrekTypeEditContext);

  const handleNewTrekType = () => {
    setOpenTrekTypeForm(true);
  };

  const handleConfirmDelete = () => {
    setDeleteBox(false);
    // console.log("IdValue", IdValue);
    deleteTrekTypeMutation.mutate(IdValue, {
      onSuccess: () => {
        setFeedback("Trek Type deleted successfully.");
      },
      onError: (error) => {
        setFeedback(
          `Error deleting trek type: ${
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
                Trek Types
              </h1>
              <button
                className="bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out rounded-xl text-lg px-5 py-3 text-white font-medium shadow-md"
                onClick={handleNewTrekType}
              >
                Add New Trek Type
              </button>
            </div>
            {openTrekTypeForm && (
              <CreateTrekTypeForm setOpenTrekTypeForm={setOpenTrekTypeForm} />
            )}
            {openDeleteBox && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-lg mb-4">
                    Do you really want to delete the Trek Type?
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
            {loading && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <LoadingSpinner />
              </div>
            )}
            <TrekTypeTable />
            {openEditForm && <EditTrekTypeForm setEditForm={setEditForm} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrekTypes;
