import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCourseStore from "../app/courseStore";
import { useNavigate } from "react-router-dom";

const TrekSliderComponent = React.memo(({ upcommingtrekslist }) => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const addDateId = useCourseStore((state) => state.addDateId);
  const navigate = useNavigate();

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
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
      navigate("/trekdetails");
      addCourse(id);
      addDateId(trekDateId);
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
              const [hovered, setHovered] = useState(false);
              const [currentImageIndex, setCurrentImageIndex] = useState(0);

              // Rotate images on hover
              useEffect(() => {
                let interval;
                if (hovered) {
                  interval = setInterval(() => {
                    setCurrentImageIndex(
                      (prevIndex) => (prevIndex + 1) % trek.images.length
                    );
                  }, 1000); // Change every second
                }
                return () => clearInterval(interval);
              }, [hovered, trek.images.length]);

              return (
                <div
                  key={index}
                  className="bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer transition-transform hover:scale-105"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => {
                    setHovered(false);
                    setCurrentImageIndex(0); // Reset to first image
                  }}
                >
                  <div className="h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-center items-center rounded-t-xl overflow-hidden relative">
                    {loading && (
                      <div className="spinner absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                        <span>Loading...</span>
                      </div>
                    )}
                    {trek.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={trek.trekName}
                        className={`absolute object-cover h-full w-full transition-opacity duration-700 ${
                          idx === currentImageIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        onLoad={() => setLoading(false)}
                      />
                    ))}
                  </div>
                  <div className="info flex flex-col items-start justify-start px-6 py-2 md:py-6 md:px-6 min-h-60">
                    <h2 className="text-lg w-full font-bold text-indigo-600 mb-2 md:mb-2 text-start flex-1">
                      {trek.trekName}
                    </h2>
                    <h3 className="text-md w-full font-medium text-gray-700 mb-2 md:mb-4 text-start flex-1">
                      {trek.trekTitle}
                    </h3>
                    <button
                      className="w-full py-3 px-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:text-orange-400 hover:from-blue-600 hover:to-indigo-600 transition-transform duration-300 ease-in-out"
                      onClick={() => handleGetInfo(trek._id, trek.dates[0])}
                    >
                      Get Trek
                      <span className="text-sm ml-2 font-medium opacity-90 hover:text-orange-400">
                        ─ Information & Dates
                      </span>
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
});

export default TrekSliderComponent;
