import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import LoadingSpinner from "./LoadingSpinner";

function SliderTrekDetailsMainPage({
  images,
  trekName,
  trekTitle,
  isLoadingDate,
  isLoading,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Return null or a loading indicator if there are no images or data is still loading
  if (isLoading || isLoadingDate) {
    return (
      <div className="flex justify-center items-center h-[380px] lg:h-[530px] w-full bg-gray-200">
        <LoadingSpinner />
      </div>
    );
  }

  if (!images.length) return null;

  return (
    <div className="relative h-[380px] lg:h-[530px] w-full m-auto mb-10 group">
      {/* Slide */}
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat duration-500 filter brightness-75"
        role="img"
        aria-label={`${trekName} slide ${currentIndex + 1}`}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full gap-6 text-white px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-center">
          {trekName}
        </h1>
        <p className="text-2xl lg:text-4xl font-semibold text-center">
          {trekTitle}
        </p>
        <button
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-full transition duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
          aria-label={`Enquire for ${trekName}`}
        >
          Enquire For {trekName}
        </button>
      </div>
      {/* Left Arrow */}
      <button
        className="absolute top-[50%] left-4 transform -translate-y-1/2 text-white text-3xl p-2 bg-gray-800 bg-opacity-50 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 hover:bg-opacity-70 shadow-md hover:shadow-lg z-20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <BsChevronCompactLeft size={24} />
      </button>
      {/* Right Arrow */}
      <button
        className="absolute top-[50%] right-4 transform -translate-y-1/2 text-white text-3xl p-2 bg-gray-800 bg-opacity-50 rounded-full transition duration-300 ease-in-out hover:bg-gray-700 hover:bg-opacity-70 shadow-md hover:shadow-lg z-20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <BsChevronCompactRight size={24} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-300"
            }`}
            role="button"
            aria-label={`Go to slide ${slideIndex + 1}`}
          >
            <RxDotFilled size={24} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderTrekDetailsMainPage;
