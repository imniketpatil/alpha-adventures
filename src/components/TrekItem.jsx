import React from "react";
import treks from "../db/data";

function TrekItem() {
  return (
    <div className="SearchItem p-2 rounded flex flex-col sm:flex-row border border-slate-400 gap-5 mb-5">
      <img
        src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="sm:w-[200px] sm:h-[200px] object-cover "
      />
      <div className=" w-[100%] flex flex-col gap-5 lg:gap-1 lg:flex-row justify-between">
        <div className="description flex flex-col gap-1 ">
          <h1 className="font-bold text-2xl text-blue-700 ">
            {treks.trekName}
          </h1>
        </div>
        <div className="Feature flex-1 flex flex-col justify-between">
          <div className="flex justify-between">
            <span className="font-bold">Excellent</span>
            <button className="font-bold bg-blue-700 text-white px-2 py-1">
              8.9
            </button>
          </div>
          <div className="flex flex-col text-right gap-1">
            <span className=" text-xl">15,000</span>
            <span className="text-sm text-slate-400">
              Include taxes and Fees
            </span>
            <button className="bg-blue-700 text font-bold px-2 py-1 cursor-pointer rounded-lg">
              See Availabity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrekItem;
