import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ScheduleTimeline from "./ScheduleTimeline";

function TrekSheduleAndDateDetails({
  startDate,
  endDate,
  withTravelByDateId,
  withoutTravelByDateId,
  scheduleTimeline,
}) {
  return (
    <div className="container mx-auto max-w-[1450px] w-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* With Travel */}
        <div className="flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-md ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            With Travel
          </h2>
          <div className="space-y-4 w-full">
            <p className="text-gray-700 text-base md:text-lg font-medium">
              {withTravelByDateId.description}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <p className="flex  gap-2 items-center text-lg md:text-xl font-bold text-gray-700">
                <LocationOnIcon className="text-blue-600" />
                From: {withTravelByDateId.from}
              </p>
              <p className="flex gap-2 items-center text-lg md:text-xl font-bold text-gray-700">
                <LocationOnIcon className="text-blue-600" />
                To: {withTravelByDateId.to}
              </p>
            </div>
            <p className="flex items-center text-lg md:text-xl font-bold text-gray-700">
              Price: {withTravelByDateId.price}
              <CurrencyRupeeIcon className="ml-1" />
            </p>
          </div>
        </div>

        {/* Without Travel */}
        <div className="flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-md ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Without Travel
          </h2>
          <div className="space-y-4 w-full">
            <p className="text-gray-700 text-base md:text-lg font-medium">
              {withoutTravelByDateId.description}
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <p className="flex gap-2 items-center text-lg md:text-xl font-bold text-gray-700">
                <LocationOnIcon className="text-blue-600" />
                From: {withoutTravelByDateId.from}
              </p>
              <p className="flex gap-2 items-center text-lg md:text-xl font-bold text-gray-700">
                <LocationOnIcon className="text-blue-600" />
                To: {withoutTravelByDateId.to}
              </p>
            </div>
            <p className="flex items-center text-lg md:text-xl font-bold text-gray-700">
              Price: {withoutTravelByDateId.price}
              <CurrencyRupeeIcon className="ml-1" />
            </p>
          </div>
        </div>
      </div>

      {/* Trek Timeline Section */}
      <div className="p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
          Trek Timeline
        </h2>
        {/* Render your timeline content here */}
        <div>
          <ScheduleTimeline scheduleTimeline={scheduleTimeline} />
        </div>
      </div>
    </div>
  );
}

export default TrekSheduleAndDateDetails;
