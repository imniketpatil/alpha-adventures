import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TrekDeleteContext from "../context/TrekDeleteContext";
import TrekIdContext from "../context/TrekIdContext";
import { useDeleteTrek } from "../hooks/useDeleteTrek";
import EditTrekForm from "../components/EditTrekForm";

function EditTrek() {
  const navigate = useNavigate();
  const deleteTrekMutation = useDeleteTrek();
  const { openDeleteBox, setDeleteBox } = useContext(TrekDeleteContext);
  const { IdValue } = useContext(TrekIdContext);

  const [feedback, setFeedback] = useState(null);

  const handleConfirmDelete = () => {
    setDeleteBox(false);
    deleteTrekMutation.mutate(IdValue, {
      onSuccess: () => {
        setFeedback("Trek deleted successfully.");
      },
      onError: (error) => {
        setFeedback(
          `Error deleting trek: ${
            error.response?.data?.message || error.message
          }`
        );
      },
    });
  };

  const handleCancelDelete = () => {
    setDeleteBox(false);
    setFeedback(null);
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="w-1/6 h-screen border-r border-gray-300 shadow-lg">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl px-6 py-4 h-screen bg-white shadow-lg overflow-auto">
          <Navbar />
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="w-full px-6">
            <div className="flex w-full justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold text-blue-500">Treks</h1>
            </div>

            <EditTrekForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTrek;
