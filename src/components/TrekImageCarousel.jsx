import React, { useState } from "react";

const TrekImageCarousel = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const openCarousel = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  // Check if product or product.images is undefined
  if (!product || !product.images) {
    return <div>No product images available.</div>;
  }

  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      {/* Div for smaller screens */}
      <div className="block lg:hidden">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="h-full w-full object-cover object-center hover:cursor-pointer"
            onClick={() => openCarousel(0)}
          />
        </div>
      </div>

      {/* Divs for larger screens */}
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={product.images[idx + 1].src}
              alt={product.images[idx + 1].alt}
              className="h-full w-full object-cover object-center hover:cursor-pointer"
              onClick={() => openCarousel(idx + 1)}
            />
          </div>
        </div>
      ))}

      {/* Modal for carousel */}
      {isCarouselOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <button
            className="absolute top-[45%] left-2 text-gray-800 lg:text-white text-8xl hover:text-gray-400 lg:hover:text-gray-300 "
            onClick={() =>
              setSelectedImageIndex((prevIndex) =>
                prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
              )
            }
          >
            &#8249;
          </button>
          <button
            className="absolute top-5 right-5 text-black lg:text-white text-6xl hover:text-gray-400 lg:hover:text-gray-300"
            onClick={closeCarousel}
          >
            &times;
          </button>
          <button
            className="absolute top-[45%] right-10 text-gray-800 lg:text-white text-8xl hover:text-gray-400 lg:hover:text-gray-300"
            onClick={() =>
              setSelectedImageIndex((prevIndex) =>
                prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            &#8250;
          </button>
          <div className="max-w-screen-lg">
            <img
              src={product.images[selectedImageIndex].src}
              alt={product.images[selectedImageIndex].alt}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrekImageCarousel;
