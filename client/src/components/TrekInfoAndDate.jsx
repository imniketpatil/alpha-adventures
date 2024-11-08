import React, { useRef, useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";
import PropTypes from "prop-types";
import useCourseStore from "../app/courseStore";
import LoadingSpinner from "./LoadingSpinner";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
function TrekInfoAndDate({
  withTravel,
  withoutTravel,
  trekName,
  trekTitle,
  trekType,
  trekDescription,
  subDescription,
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

  console.log(withTravel.length);
  console.log(withoutTravel.length);

  const addDateId = useCourseStore((state) => state.addDateId);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
    addDateId(dateid);
  };

  const hasDates = date?.length > 0;
  const hasEndDates = allEndDate?.length > 0;

  // const firstTrek = trekDateData.length > 0 ? trekDateData[0] : null;

  // // Initialize flags for travel options
  // let hasWithTravel = false;
  // let hasWithoutTravel = false;

  // // Check for price details if firstTrek exists
  // if (firstTrek?.priceDetails) {
  //   if (
  //     firstTrek.priceDetails.withTravel?.length > 0 &&
  //     firstTrek.priceDetails.withTravel[0]?.price !== ""
  //   ) {
  //     hasWithTravel = true;
  //   }
  //   if (
  //     firstTrek.priceDetails.withoutTravel?.length > 0 &&
  //     firstTrek.priceDetails.withoutTravel[0]?.price !== ""
  //   ) {
  //     hasWithoutTravel = true;
  //   }
  // }

  let hasWithTravel = false;
  let hasWithoutTravel = false;

  if (withTravel?.length > 0 && withTravel[0]?.description !== "") {
    hasWithTravel = true;
  }
  if (withoutTravel?.length > 0 && withoutTravel[0]?.description !== "") {
    hasWithoutTravel = true;
  }

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

  console.log(withTravel.length);
  console.log(withoutTravel.length);

  return (
    <div
      ref={trekRef}
      className="container mx-auto p-6 bg-white rounded-xl shadow-lg mb-8"
    >
      {isLoadingDate || isLoadingTrek ? (
        <div className="flex justify-center py-6">
          <LoadingSpinner /> {/* Display the loading spinner */}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="lg:w-2/3 relative mb-10">
            <h1 className="text-4xl font-extrabold mb-4">
              {trekName}
              <br />
              <span className="text-3xl text-gray-600">{trekTitle}</span>
            </h1>
            <p className="text-xl font-medium text-gray-700 flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-blue-600" /> {trekLocation}
            </p>
            <div
              style={{
                maxHeight: isExpanded ? "none" : "150px",
                overflow: "hidden",
                position: "relative", // For absolute positioning of the gradient
                transition: "max-height 0.3s ease",
              }}
            >
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                {trekDescription}
              </p>
              {subDescription
                ? subDescription.map((subD, index) => (
                    <>
                      <h1 className="text-xl font-medium text-gray-700 flex items-center mb-2">
                        {subD.descTitle}
                      </h1>
                      <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        {subD.desc}
                      </p>
                    </>
                  ))
                : null}
              {!isExpanded && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background:
                      "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))", // Change 'rgba(255, 255, 255, 1)' to your background color
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>
            <div className="flex flex-col items-center mt-2">
              <button
                onClick={() => {
                  toggleExpand();
                  setIsHovered(false);
                }}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isExpanded ? (
                  <>
                    <KeyboardDoubleArrowUpIcon
                      fontSize="large"
                      style={{
                        transition: "transform 0.5s, opacity 0.5s",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                        color: isHovered ? "black" : "gray",
                      }}
                    />
                    {isHovered && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "15px",
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          padding: "5px 10px",
                          borderRadius: "3px",
                          fontSize: "0.9rem",
                          transition: "opacity 0.5s",
                          opacity: isHovered ? 1 : 0,
                        }}
                      >
                        Read Less
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <KeyboardDoubleArrowDownIcon
                      fontSize="large"
                      style={{
                        transition: "transform 0.5s, opacity 0.5s",
                        transform: isHovered ? "scale(1.2)" : "scale(1)",
                        color: isHovered ? "black" : "gray",
                      }}
                    />
                    {isHovered && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "15px",
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          padding: "5px 10px",
                          borderRadius: "3px",
                          fontSize: "0.9rem",
                          transition: "opacity 0.5s",
                          opacity: isHovered ? 1 : 0,
                        }}
                      >
                        Read More
                      </span>
                    )}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold flex items-center mb-2">
                <FaTag className="mr-2 text-blue-600" />
                Trek Type: {trekType}
              </p>
              <p className="text-gray-700 text-lg">{trekTypeDescription}</p>
            </div> */}

          <div className="lg:w-1/3 bg-gray-50 px-6 py-3 rounded-lg shadow-lg border-4 border-yellow-400">
            <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
              Trek Dates with Prices
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
                      {hasWithTravel ? (
                        <div className="mb-2">
                          <p className="font-bold text-base text-gray-800 mb-1">
                            Price with Travel:
                          </p>
                          <div className="space-y-2">
                            {withTravel.map((withT, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center bg-yellow-100  rounded-lg "
                              >
                                <p className="font-semibold text-gray-800">
                                  {withT.description}
                                </p>
                                <p className="text-green-700 font-bold">
                                  {withT.price}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {hasWithoutTravel ? (
                        <div className="mb-2">
                          <p className="font-bold text-base text-gray-800 mb-1">
                            Price without Travel:
                          </p>
                          <div className="space-y-2">
                            {withoutTravel.map((withoutT, idx) => (
                              <div
                                key={idx}
                                className="flex justify-between items-center bg-yellow-100  rounded-lg"
                              >
                                <p className="font-semibold text-gray-800">
                                  {withoutT.description}
                                </p>
                                <p className="text-green-700 font-bold">
                                  {withoutT.price}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <button
                        className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold rounded-full transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                        aria-label={`Enquire for ${trekName}`}
                        onClick={() => handleBooking(trekName, date[index])}
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
