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

function TrekTypes() {
  const deleteTrekTypeMutation = useDeleteTrekType();

  const [OpenTrekTypeForm, setOpenTrekTypeForm] = useState(false);

  const { openDeleteBox, setDeleteBox } = useContext(TrekTypeDeleteContext);

  const { IdValue, setIdValue } = useContext(TrekTypeIdContext);

  const { openEditForm } = useContext(TrekTypeEditContext);

  const handleNewTrekGuide = () => {
    setOpenTrekTypeForm(true);
  };

  const handleConfirmDelete = () => {
    setDeleteBox(false);
    console.log("IdValue", IdValue);
    deleteTrekTypeMutation.mutate(IdValue);
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
            {OpenTrekTypeForm && (
              <CreateTrekTypeForm setOpenTrekGuideForm={setOpenTrekTypeForm} />
            )}
            {openDeleteBox && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <p className="text-lg mb-4">
                    Do you really want to delete the Trek Type?
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
            <TrekTypeTable />
            {openEditForm && <EditTrekTypeForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrekTypes;
