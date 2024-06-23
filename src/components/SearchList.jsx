import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import TrekItem from "./TrekItem";

function SearchList() {
  const location = useLocation();

  const params = useParams();

  console.log(params);

  // Use default values if location state is not available
  const defaultTrekDestination = "";

  // Retrieve trek destination and date from location state
  const trekDestination = location.state
    ? location.state.trek
    : defaultTrekDestination;

  return (
    <div className="flex justify-center pt-20">
      <div className="w-full max-w-[1080px] flex gap-5 flex-col lg:flex-row px-2">
        <div className="w-full max-w-[1024px] md:w-1/4 bg-yellow-500 rounded-xl sticky p-3 flex flex-col gap-2 h-max ">
          <h1 className="mb-5 text-2xl m-2 text-blue-700 font-bold">Search</h1>
          <div className="flex flex-col gap-2 text-sm md:text-lg font-semibold">
            <label>Trek Destination</label>
            <input
              type="text"
              value={trekDestination}
              disabled
              className="bg-white p-2 overflow-auto"
            />
          </div>
        </div>
        <div>
          <TrekItem />
          <TrekItem />
          <TrekItem />
        </div>
      </div>
    </div>
  );
}

export default SearchList;
