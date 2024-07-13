import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function List() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/6 h-screen border-r-2 border-gray-300">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl flex-grow px-4 pb-4 h-screen bg-white">
          <Navbar />
          <hr className="border-1 border-gray-300" />
          <div className="w-full mt-10"></div>
        </div>
      </div>
    </div>
  );
}

export default List;
