import React, { useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import useCourseStore from "../app/courseStore";
import LoadingSpinner from "./LoadingSpinner";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

// Utility functions
const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0"); // Pad day with leading zero
  const month = d.toLocaleDateString("en-IN", { month: "short" }); // Short month
  const year = d.getFullYear();

  return `${day} ${month} ${year}`;
};

const generateWhatsAppLink = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

// TrekInfoAndDate Component
const TrekInfoAndDate = React.memo(
  ({
    withTravel = [],
    withoutTravel = [],
    trekName = "Unknown Trek",
    trekTitle = "",
    trekDescription = "",
    subDescription = [],
    trekLocation = "",
    dateid = [],
    date = [],
    allEndDate = [],
    isLoadingDate = false,
    isLoadingTrek = false,
  }) => {
    const addDateId = useCourseStore((state) => state.addDateId);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const trekRef = useRef(null);

    const toggleExpand = () => {
      if (isExpanded) {
        trekRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setIsExpanded(!isExpanded);
    };

    const toggleActive = (index, dateid) => {
      setActiveIndex(activeIndex === index ? null : index);
      setIsExpanded(true);
      addDateId(dateid);
    };

    const handleBooking = (trekName, date) => {
      const formattedDate = date ? formatDate(date) : "N/A";
      const message = `Hey Alpha Adventures, I'm interested in the ${trekName} on ${formattedDate}. Can you provide more details?`;
      const whatsappNumber = "+919403449240"; // Replace with your actual WhatsApp number
      const url = generateWhatsAppLink(whatsappNumber, message);
      window.open(url, "_blank");
    };

    const renderPricing = (pricingArray, title) => (
      <div className="mb-2">
        <p className="font-bold text-base text-gray-800 mb-1">{title}:</p>
        {pricingArray.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-yellow-100 rounded-lg"
          >
            <p className="font-semibold text-gray-800">{item.description}</p>
            <p className="text-green-700 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    );

    const hasDates = date?.length > 0;

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
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex flex-col items-center mt-2">
              <div
                className="flex flex-col lg:flex-row gap-3"
                style={{
                  maxHeight: isExpanded ? "none" : "300px",
                  overflow: "hidden",
                  position: "relative",
                  transition: "max-height 0.3s ease",
                }}
              >
                {!isExpanded && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "80px",
                      background:
                        "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                    }}
                  />
                )}
                <div className="lg:w-2/3 relative mb-10">
                  <h1 className="text-4xl font-extrabold mb-4">
                    {trekName}
                    <br />
                    <span className="text-3xl text-gray-600">{trekTitle}</span>
                  </h1>
                  <p className="text-xl font-medium text-gray-700 flex items-center mb-4">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" />
                    {trekLocation}
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed mb-4">
                    {trekDescription}
                  </p>
                  {subDescription.map((subD, index) => (
                    <div key={index}>
                      <h1 className="text-xl font-medium text-gray-700 mb-2">
                        {subD.descTitle}
                      </h1>
                      <p className="text-lg text-gray-800 mb-4">{subD.desc}</p>
                    </div>
                  ))}
                </div>
                {!isExpanded && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "80px",
                      background:
                        "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                    }}
                  />
                )}
                <div className="lg:w-1/3 bg-gray-50 px-6 py-3 rounded-lg shadow-lg border-4 border-yellow-400 h-min">
                  <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
                    Dates with Prices
                  </h2>
                  {hasDates ? (
                    date.map((d, index) => (
                      <div
                        key={index}
                        className={`mb-4 p-1 transition-transform duration-300 transform hover:scale-105 rounded-lg shadow-md ${
                          activeIndex === index
                            ? "bg-yellow-100 scale-105 shadow-lg"
                            : "bg-white hover:bg-yellow-100"
                        }`}
                        onClick={() => toggleActive(index, dateid[index])}
                      >
                        <div className="py-1 text-center">
                          <p className="text-lg font-bold text-slate-800 mb-1">
                            Batch {index + 1}
                          </p>
                          <p className="text-md font-bold text-gray-600">
                            {formatDate(d)} to {formatDate(allEndDate[index])}
                          </p>
                        </div>
                        {activeIndex === index && (
                          <div className="py-2 px-2 bg-yellow-100 rounded-b-lg">
                            {withTravel.length > 0 &&
                              renderPricing(withTravel, "Price with Travel")}
                            {withoutTravel.length > 0 &&
                              renderPricing(
                                withoutTravel,
                                "Price without Travel"
                              )}
                            <button
                              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold rounded-full transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                              onClick={() =>
                                handleBooking(trekName, date[index])
                              }
                            >
                              Enquire For {trekName}
                            </button>
                          </div>
                        )}
                        {/* {!isExpanded && (
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              height: "80px",
                              background:
                                "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                            }}
                          />
                        )} */}
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-600">
                      No dates available
                    </p>
                  )}
                </div>
              </div>
              <button onClick={toggleExpand} style={{ cursor: "pointer" }}>
                {isExpanded ? (
                  <KeyboardDoubleArrowUpIcon fontSize="large" />
                ) : (
                  <KeyboardDoubleArrowDownIcon fontSize="large" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

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
