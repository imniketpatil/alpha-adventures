import React from "react";
import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/6 h-screen border-r-2 border-gray-300">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl flex-grow p-4 bg-gray-200 h-screen">
          Home Container
        </div>
      </div>
    </div>
  );
};

export default Home;
