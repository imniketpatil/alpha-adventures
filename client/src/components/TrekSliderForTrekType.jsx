import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCourseStore from "../app/courseStore";
import { Link, Navigate, useNavigate } from "react-router-dom";

function TrekSliderForTrekType({ TreksForTrekType }) {
  const addCourse = useCourseStore((state) => state.addCourse);
  const addDateId = useCourseStore((state) => state.addDateId);
  const navigate = useNavigate();

  const [loadingStates, setLoadingStates] = useState(
    TreksForTrekType.map(() => true)
  );

  const handleImageLoad = (index) => {
    setLoadingStates((prev) => {
      const newLoadingStates = [...prev];
      newLoadingStates[index] = false;
      return newLoadingStates;
    });
  };

  const handleImageError = (index) => {
    setLoadingStates((prev) => {
      const newLoadingStates = [...prev];
      newLoadingStates[index] = false; // Hide the spinner if image fails
      return newLoadingStates;
    });
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleGetInfo = (id, trekDateId) => {
    if (id && trekDateId) {
      addCourse(id);
      addDateId(trekDateId);
      // navigate("/trekdetails");
    }
  };

  return (
    <div className="w-full">
      <div className="w-[98%] m-auto">
        {TreksForTrekType?.length === 0 ? (
          <p>No treks available at the moment.</p>
        ) : (
          <Slider {...settings}>
            {TreksForTrekType?.map((trek, index) => (
              <div
                key={index}
                className="bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer "
              >
                <div className="h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden">
                  {loadingStates[index] && (
                    <div className="spinner absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                      <span>Loading...</span>
                    </div>
                  )}
                  <img
                    src={trek.images[0]}
                    alt={trek.trekName}
                    className={`object-cover h-full w-full ${
                      loadingStates[index] ? "hidden" : ""
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                  />
                </div>
                <div className="flex flex-col items-center px-6 py-2 md:py-6 md:px-6">
                  <h2 className="text-2xl font-bold text-indigo-600 mb-0 md:mb-2">
                    {trek.trekName}
                  </h2>
                  <h3 className="text-lg font-medium text-gray-700 mb-0 md:mb-4">
                    {trek.trekTitle}
                  </h3>
                  <div className="w-full text-gray-600 mb-0 md:mb-4">
                    <p className="mb-2">
                      <span className="font-semibold">Type:</span>{" "}
                      {trek.trekType}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Location:</span>{" "}
                      {trek.trekLocation}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Suitable Age:</span>{" "}
                      {trek.suitableForAge}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Trek Start Date:</span>{" "}
                      {new Date(trek.startDate).toLocaleDateString("en-GB")}
                    </p>
                    <div className="flex justify-between">
                      <p className="mb-2">
                        <span className="font-semibold">Duration:</span>{" "}
                        {trek.dateDifference} days
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">Difficulty:</span>{" "}
                        {trek.trekDifficulty.charAt(0).toUpperCase() +
                          trek.trekDifficulty.slice(1)}
                      </p>
                    </div>
                  </div>
                  <Link to="/trekdetails">
                    <button
                      className="button"
                      onClick={() => handleGetInfo(trek._id, trek.trekDateId)}
                    >
                      Get Trek
                      <span className="button-span">
                        {" "}
                        ─ Information & Dates
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default TrekSliderForTrekType;
