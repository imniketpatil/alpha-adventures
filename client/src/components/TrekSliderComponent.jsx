import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import useTrekStore from "../app/trekStore";
import useCourseStore from "../app/courseStore";
import { useNavigate } from "react-router-dom";

function TrekSliderComponent({ upcommingtrekslist }) {
  const addCourse = useCourseStore((state) => state.addCourse);
  const addDateId = useCourseStore((state) => state.addDateId);

  const navigate = useNavigate();

  // const { trekList } = useTrekStore((state) => ({ trekList: state.trekList }));

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
      navigate("/trekdetails");
    }
  };

  return (
    <div className="w-full">
      <div className="w-[98%] m-auto">
        {upcommingtrekslist.length === 0 ? (
          <p>No treks available at the moment.</p>
        ) : (
          <Slider {...settings}>
            {upcommingtrekslist.map((trek, index) => {
              const [loading, setLoading] = useState(true);

              return (
                <div
                  key={index}
                  className="bg-slate-200  shadow-lg rounded-xl hover:cursor-pointer "
                >
                  <div className="h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden">
                    {loading && (
                      <div className="spinner absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                        <span>Loading...</span>
                      </div>
                    )}
                    <img
                      src={trek.images[0]}
                      alt={trek.trekName}
                      className={`object-cover h-full w-full ${
                        loading ? "hidden" : ""
                      }`}
                      onLoad={() => setLoading(false)}
                    />
                  </div>
                  <div className="info flex flex-col items-center px-6 py-2 md:py-6 md:px-6">
                    <h2 className="text-xl font-bold text-indigo-600 mb-2 md:mb-2 text-center">
                      {trek.trekName}
                    </h2>
                    <h3 className="text-md font-medium text-gray-700 mb-2 md:mb-4 text-center">
                      {trek.trekTitle}
                    </h3>
                    {/* <div className="w-full text-gray-600 mb-0 md:mb-4">
                      <p className="mb-2 text-sm">
                        <span className="font-semibold">Type:</span>{" "}
                        {trek.trekType}
                      </p>
                      <p className="mb-2 text-sm">
                        <span className="font-semibold">Location:</span>{" "}
                        {trek.trekLocation}
                      </p>
                      <p className="mb-2 text-sm">
                        <span className="font-semibold">Suitable Age:</span>{" "}
                        {trek.suitableForAge}
                      </p>
                      <p className="mb-2 text-sm">
                        <span className="font-semibold">Trek Start Date:</span>{" "}
                        {new Date(trek.startDate).toLocaleDateString("en-GB")}
                      </p>
                      <div className="flex justify-between">
                        <p className="mb-2 text-sm">
                          <span className="font-semibold">Duration:</span>{" "}
                          {trek.dateDifference} days
                        </p>
                        <p className="mb-2 text-sm">
                          <span className="font-semibold">Difficulty:</span>{" "}
                          {trek.trekDifficulty.charAt(0).toUpperCase() +
                            trek.trekDifficulty.slice(1)}
                        </p>
                      </div>
                    </div> */}
                    <button
                      className="button mb-2 md:mb-0"
                      onClick={() => handleGetInfo(trek._id, trek.trekDateId)}
                    >
                      Get Trek
                      <span className=" text-sm "> ─ Information & Dates</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default TrekSliderComponent;
