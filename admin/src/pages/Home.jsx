import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import Table from "../components/Table";

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/6 h-screen border-r-2 border-gray-300">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl flex-grow px-4 pb-4 h-screen bg-white">
          <Navbar />
          <hr className="border-1 border-gray-300" />
          <div className="flex p-5 gap-5 w-full justify-evenly">
            <Widget />
            <Widget />
            <Widget />
            <Widget />
          </div>
          <div className="p-4 flex flex-col gap-4 ">
            <p className="font-semibold text-gray-600 ">Treks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
