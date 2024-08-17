import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function SliderTrekDetailsMainPage({ images, trekName, trekTitle }) {
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

  return (
    <div className="relative group h-[380px] lg:h-[530px] w-full mx-auto mb-10">
      <div
        className="relative w-full h-full bg-center bg-cover bg-no-repeat duration-500"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 h-full w-full flex flex-col justify-center items-center gap-10 text-center text-white">
          <p className="text-4xl lg:text-6xl font-bold shadow-lg">{trekName}</p>
          <p className="text-2xl lg:text-4xl font-bold shadow-2xl">
            {trekTitle}
          </p>
          <button className="bg-blue-500 border border-blue-700 text-white rounded-lg text-sm px-5 py-2.5 font-medium hover:bg-blue-600 transition duration-200 hover:shadow-lg">
            Enquire For {trekName}
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] left-5 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 cursor-pointer z-20">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] right-5 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 cursor-pointer z-20">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer text-2xl ${
              currentIndex === slideIndex ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderTrekDetailsMainPage;
