import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import Table from "../components/Table";

const Home = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="w-1/6 h-screen border-r border-gray-300 shadow-lg">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen">
        <div className="font-body text-3xl px-6 py-4 h-full bg-white shadow-lg overflow-auto">
          <Navbar />
          <hr className="border-t-2 border-gray-300 my-4" />
          <main className="flex flex-col h-full">
            <section className="flex p-5 gap-5">
              <Widget />
              <Widget />
              <Widget />
              <Widget />
            </section>
            <section className="p-6 flex flex-col gap-4">
              <p className="font-semibold text-gray-600 text-3xl">Treks</p>
              <Table />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
