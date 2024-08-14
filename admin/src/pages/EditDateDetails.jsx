import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TrekDeleteContext from "../context/TrekDeleteContext";
import TrekIdContext from "../context/TrekIdContext";
import { useDeleteTrek } from "../hooks/useDeleteTrek";
import EditTrekForm from "../components/EditTrekForm";
import EditDateForTrek from "../components/EditDateForTrek";

function EditDateDetails() {
  const navigate = useNavigate();

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

            <EditDateForTrek />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDateDetails;
