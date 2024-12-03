import React, { useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import useCourseStore from "../app/courseStore";
import LoadingSpinner from "./LoadingSpinner";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { RxLetterCaseLowercase } from "react-icons/rx";

// Utility functions
const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleDateString("en-IN", { month: "short" });
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
};

const formatStartDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleDateString("en-IN", { month: "short" });
  const year = d.getFullYear();
  return `${day} ${month} `;
};

const generateWhatsAppLink = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

const TrekInfoAndDate = ({
  withTravel = [],
  withoutTravel = [],
  trekName = "Unknown Trek",
  trekTitle = "",
  trekDescription = "",
  subDescription = [],
  trekLocation = "",
  availablity = "",
  dateid = [],
  date = [],
  trekDateOffer,
  allEndDate = [],
  isLoadingDate = false,
  isLoadingTrek = false,
}) => {
  const addDateId = useCourseStore((state) => state.addDateId);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const trekRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(isExpanded);
  };

  const toggleActive = (index, dateid) => {
    setActiveIndex(activeIndex === index ? null : index);
    addDateId(dateid);
  };

  const handleBooking = (trekName, date) => {
    const formattedDate = date ? formatDate(date) : "N/A";
    const message = `Hey Alpha Adventures, I'm interested in the ${trekName} on ${formattedDate}. Can you provide more details?`;
    const whatsappNumber = "+919403449240";
    const url = generateWhatsAppLink(whatsappNumber, message);
    window.open(url, "_blank");
  };

  const renderPricing = (pricingArray, title) => (
    <div className="mb-2">
      <p className="font-bold text-gray-800">{title}:</p>
      {pricingArray.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-yellow-50 p-2 rounded-lg"
        >
          <p className="text-gray-800">{item.description}</p>
          <p className="text-green-700 font-bold">{item.price}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={trekRef}
      className="container mx-auto p-6 bg-white rounded-xl shadow-lg mb-8"
    >
      {isLoadingDate || isLoadingTrek ? (
        <div className="flex justify-center py-6">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Trek Information */}
            <div className="lg:w-2/3 h-min static lg:sticky top-6">
              {/* Sticky Header */}
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">
                  {trekName}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 mb-4">
                  {trekTitle}
                </h2>
                <p className="text-lg lg:text-xl font-medium text-gray-700 flex items-center mb-4">
                  <FaMapMarkerAlt className="mr-2 text-blue-600" />
                  {trekLocation}
                </p>
              </div>

              {/* Expandable and Sticky Description */}
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out p-4 rounded-lg`}
                style={{
                  maxHeight: !isExpanded ? "full" : "full",
                }}
              >
                <p className="text-lg text-gray-800 leading-relaxed">
                  {trekDescription}
                </p>
                {isExpanded &&
                  subDescription.map((subD, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">
                        {subD.descTitle}
                      </h3>
                      <p className="text-lg text-gray-800 mb-4">{subD.desc}</p>
                    </div>
                  ))}
              </div>
              {/* <button
                className="mt-4 flex justify-center mx-auto px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={toggleExpand}
              >
                {isExpanded ? (
                  <KeyboardDoubleArrowUpIcon />
                ) : (
                  <KeyboardDoubleArrowDownIcon />
                )}
              </button> */}
            </div>

            {/* Dates Section */}
            <div className="lg:w-1/3 bg-gray-50 px-6 py-4 rounded-lg shadow-md border-4 h-min border-yellow-300 static lg:sticky top-6 mt-6 lg:mt-0">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Available Dates
              </h2>

              {date.length > 0 ? (
                date.map((d, index) => {
                  const currentDate = new Date();
                  const trekDate = new Date(d);

                  // Only render if current date is <= trek date (i.e., trekDate >= currentDate)
                  if (trekDate >= currentDate) {
                    return (
                      <div
                        key={index}
                        className={`mb-6 p-5 relative rounded-lg shadow-sm border transition-transform duration-300 transform ${
                          activeIndex === index
                            ? "bg-yellow-50 scale-105 shadow-md border-yellow-300"
                            : "bg-white hover:shadow-md hover:scale-105 border-gray-200"
                        }`}
                        onClick={() => toggleActive(index, dateid[index])}
                      >
                        {trekDateOffer[index] !== "" && (
                          <span className="absolute top-0 right-0 z-10 bg-red-500 text-white font-medium text-xs px-3 py-1 rounded-bl-lg shadow-md">
                            {trekDateOffer[index]}% OFF
                          </span>
                        )}
                        <div
                          className={`flex items-center ${
                            availablity[index]
                              ? "justify-between"
                              : "justify-center"
                          }`}
                        >
                          <p className="text-gray-700 font-medium">
                            {formatStartDate(d)} to{" "}
                            {formatDate(allEndDate[index])}
                          </p>
                          {availablity[index] && (
                            <p
                              className={`font-semibold text-sm ${
                                availablity[index].toLowerCase() === "sold out"
                                  ? "text-red-600"
                                  : "text-green-600"
                              }`}
                            >
                              {availablity[index]}
                            </p>
                          )}
                        </div>
                        {activeIndex === index && (
                          <div className="mt-4 space-y-3">
                            {withTravel.length > 0 &&
                              renderPricing(withTravel, "Price with Travel")}
                            {withoutTravel.length > 0 &&
                              renderPricing(
                                withoutTravel,
                                "Price without Travel"
                              )}
                            <button
                              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition-colors"
                              onClick={() =>
                                handleBooking(trekName, date[index])
                              }
                            >
                              Enquire Now
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  }
                  return null; // If the trek date is in the past, do not render it
                })
              ) : (
                <p className="text-center text-gray-600">No dates available</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

TrekInfoAndDate.propTypes = {
  trekName: PropTypes.string,
  trekTitle: PropTypes.string,
  trekDescription: PropTypes.string,
  trekLocation: PropTypes.string,
  dateid: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.arrayOf(PropTypes.string),
  allEndDate: PropTypes.arrayOf(PropTypes.string),
  withTravel: PropTypes.array,
  withoutTravel: PropTypes.array,
  isLoadingDate: PropTypes.bool,
  isLoadingTrek: PropTypes.bool,
};

export default TrekInfoAndDate;
