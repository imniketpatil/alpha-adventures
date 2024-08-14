import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CreateTrek from "../components/CreateTrek";

function CreateNewTrek() {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="w-1/6 h-screen border-r border-gray-300 shadow-lg">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl px-6 py-4 h-full bg-white shadow-lg overflow-auto">
          <Navbar />
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="w-full px-6">
            <div className="flex w-full justify-between items-center mb-6">
              <h1 className="text-3xl font-semibold text-blue-500">
                Create New Trek
              </h1>
            </div>
            <CreateTrek />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTrek;
