import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import useCourseStore from "../app/courseStore";

function TrekInfoAndDate({
  trekName,
  trekTitle,
  trekLocation,
  trekDescription,
  trekType,
  trekTypeDescription,
  allStartDate,
  allEndDate,
}) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const addDateId = useCourseStore((state) => state.addDateId);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index, dateid) => {
    setActiveIndex(activeIndex === index ? null : index);
    addDateId(dateid);
  };

  // Ensure data exists before trying to map over it
  const hasDates =
    allStartDate && allStartDate.date && allStartDate.date.length > 0;
  const hasEndDates = allEndDate && allEndDate.length > 0;

  return (
    <div className="mx-auto max-w-[1380px] w-full p-8 bg-white shadow-xl rounded-xl mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center justify-between gap-8">
        {/* Left Section */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold mb-4">
              {trekName}
              <span className="text-3xl text-gray-700 mb-1">: {trekTitle}</span>
            </h1>
            <p className="text-2xl font-medium text-gray-700 flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-blue-600" /> {trekLocation}
            </p>
          </div>
          <div className="mb-8">
            <p className="text-xl font-normal text-gray-700 leading-relaxed">
              {trekDescription}
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-lg font-bold flex items-center mb-2">
              <FaTag className="mr-2 text-blue-600" />
              Trek Type: {trekType}
            </p>
            <p className="text-gray-700 text-lg font-semibold">
              {trekTypeDescription}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 bg-gray-50 p-6 lg:p-6 rounded-lg shadow-xl border-8 border-yellow-500 h-fit">
          <h2 className="text-2xl font-bold p-3 text-center text-gray-800">
            Start & End Dates with Prices
          </h2>
          {hasDates ? (
            allStartDate.date.map((date, index) => (
              <div
                key={index}
                className={` mb-3 pb-3 border-b border-gray-300 cursor-pointer rounded-lg transition-transform duration-200 transform ${
                  activeIndex === index
                    ? "bg-yellow-100 scale-105 shadow-lg p-2"
                    : "hover:bg-yellow-50 hover:scale-105 shadow-lg"
                }`}
                onClick={() => toggleActive(index, allStartDate.dateid[index])}
              >
                <div className="flex flex-col items-center text-center py-2">
                  <p className="font-bold text-xl text-gray-900 mb-2">
                    Batch {index + 1}
                  </p>
                  <p className="font-semibold text-lg text-gray-700">
                    {formatDate(date)} To {formatDate(allEndDate[index])}
                  </p>
                </div>
                {activeIndex === index && (
                  <div className="transition-all duration-300 ease-in-out py-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className=" text-gray-700 font-bold">
                        Price with Travel:
                      </span>
                      <span className="text-green-700 text-lg  font-bold">
                        ₹ {allStartDate.withTravel[index].toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center  font-bold">
                      <span className="font-bold text-gray-700">
                        Price without Travel:
                      </span>
                      <span className="text-green-700 text-lg font-bold">
                        ₹ {allStartDate.withoutTravel[index].toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No dates available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrekInfoAndDate;
