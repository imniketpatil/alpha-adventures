import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import PropTypes from "prop-types";
import useCourseStore from "../app/courseStore";
import LoadingSpinner from "./LoadingSpinner";

function TrekInfoAndDate({
  trekName,
  trekTitle,
  trekType,
  trekDescription,
  trekLocation,
  trekTypeDescription,
  dateid,
  date,
  startDateWithTravel,
  startDateWithoutTravel,
  allEndDate,
  isLoadingDate,
  isLoadingTrek,
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

  const hasDates = date?.length > 0;
  const hasEndDates = allEndDate?.length > 0;

  const handleBooking = (trekName, date) => {
    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "N/A";

    const message = `Hey Alpha Adventures, I'm interested in the ${trekName} on ${formattedDate}. Can you provide more details?`;
    const whatsappNumber = "+919403449240"; // Replace with your actual WhatsApp number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-xl shadow-lg mb-8">
      {isLoadingDate || isLoadingTrek ? (
        <div className="flex justify-center py-6">
          <LoadingSpinner /> {/* Display the loading spinner */}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-2xl font-extrabold mb-4">
              {trekName}
              <span className="text-xl text-gray-600">: {trekTitle}</span>
            </h1>
            <p className="text-lg font-medium text-gray-700 flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-blue-600" /> {trekLocation}
            </p>
            <p className="text-md text-gray-800 leading-relaxed mb-8">
              {trekDescription}
            </p>
            {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold flex items-center mb-2">
                <FaTag className="mr-2 text-blue-600" />
                Trek Type: {trekType}
              </p>
              <p className="text-gray-700 text-lg">{trekTypeDescription}</p>
            </div> */}
          </div>

          <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md border-4 border-yellow-500">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
              Trek Dates with Prices
            </h2>
            {hasDates ? (
              date.map((d, index) => (
                <div
                  key={index}
                  className={`mb-4  hover:cursor-pointer rounded-lg transition-transform duration-200 transform ${
                    activeIndex === index
                      ? "bg-yellow-100 scale-105 "
                      : "hover:bg-yellow-50 hover:scale-105"
                  }`}
                  onClick={() => toggleActive(index, dateid[index])}
                >
                  <div className="p-4 text-center">
                    <p className="text-lg font-bold text-gray-800 mb-2">
                      Batch {index + 1}
                    </p>
                    <p className="text-md font-medium text-gray-700">
                      {formatDate(d)} to {formatDate(allEndDate[index])}
                    </p>
                  </div>
                  {activeIndex === index && (
                    <div className="p-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-gray-700">
                          Price with Travel:
                        </span>
                        <span className="text-green-700 font-bold">
                          ₹{" "}
                          {startDateWithTravel[index]?.toLocaleString() ||
                            "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span className="font-bold text-gray-700">
                          Price without Travel:
                        </span>
                        <span className="text-green-700 font-bold">
                          ₹{" "}
                          {startDateWithoutTravel[index]?.toLocaleString() ||
                            "N/A"}
                        </span>
                      </div>
                      <button
                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-full transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                        aria-label={`Enquire for ${trekName}`}
                        onClick={() => handleBooking(trekName, date[index])} // Pass the date parameter here
                      >
                        Enquire For {trekName}
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No dates available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

TrekInfoAndDate.propTypes = {
  trekName: PropTypes.string.isRequired,
  trekTitle: PropTypes.string.isRequired,
  trekType: PropTypes.string.isRequired,
  trekDescription: PropTypes.string.isRequired,
  trekLocation: PropTypes.string.isRequired,
  trekTypeDescription: PropTypes.string.isRequired,
  dateid: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.arrayOf(PropTypes.string).isRequired,
  startDateWithTravel: PropTypes.arrayOf(PropTypes.number).isRequired,
  startDateWithoutTravel: PropTypes.arrayOf(PropTypes.number).isRequired,
  allEndDate: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoadingDate: PropTypes.bool.isRequired,
  isLoadingTrek: PropTypes.bool.isRequired,
};

export default TrekInfoAndDate;
