import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import LoadingSpinner from "./LoadingSpinner"; // Assuming you have a LoadingSpinner component

function TrekDetailsPageSlider({
  images,
  trekName,
  trekTitle,
  isLoadingTrek,
  isLoadingDate,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (isLoadingTrek || isLoadingDate) {
    return (
      <div className="relative h-[380px] lg:h-[530px] w-full m-auto mb-10 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  const handleBooking = (trekName) => {
    const message = `Hey Alpha Adventures, I'm interested in the ${trekName}. Can you provide more details?`;
    const whatsappNumber = "+919403449240"; // Replace with your actual WhatsApp number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open the URL in a new tab or window
    window.open(url, "_blank");
  };

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
          onClick={() => {
            handleBooking(trekName);
          }}
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

export default TrekDetailsPageSlider;
