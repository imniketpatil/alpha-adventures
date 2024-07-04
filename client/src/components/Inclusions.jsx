import React from "react";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import HomeIcon from "@mui/icons-material/Home";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

function Inclusions() {
  const inclusions = [
    {
      icon: <FreeBreakfastIcon className="text-slate-700" />,
      text: "Breakfast",
    },
    { icon: <DinnerDiningIcon className="text-slate-700" />, text: "Lunch" },
    { icon: <LocalDiningIcon className="text-slate-700" />, text: "Meal" },
    { icon: <HomeIcon className="text-slate-700" />, text: "Stays" },
    { icon: <TrainIcon className="text-slate-700" />, text: "Travel" },
    {
      icon: <DirectionsBusIcon className="text-slate-700" />,
      text: "Tranport",
    },
    { icon: <SportsCricketIcon className="text-slate-700" />, text: "Sport" },
    {
      icon: <TransferWithinAStationIcon className="text-slate-700" />,
      text: "Guide",
    },
  ];

  return (
    <div className="bg-slate-100 py-24 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Inclusions
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What's included in the Trek
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are the services and amenities you will enjoy during the trek.
          </p>
        </div>
        <div className="mt-10">
          <ul
            role="list"
            className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8"
          >
            {inclusions.map((inclusion) => (
              <li
                key={inclusion.text}
                className="relative bg-white flex flex-col sm:flex-row pt-3 pb-4 px-3 shadow-xl border border-gray-200 rounded-lg sm:pt-5 sm:pb-6 sm:px-5"
              >
                <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-md shadow-lg mb-4 sm:mb-0 sm:mr-4">
                  {inclusion.icon}
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center my-auto">
                  {inclusion.text}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Inclusions;
