import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import useGetTestimonials from "../hooks/useGetTestimonials";

export default function Testimonial() {
  const {
    data: testimonialDetails = [], // Provide a default empty array
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Testimonials"],
    queryFn: useGetTestimonials,
  });

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
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

  if (isLoading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>Error loading testimonials</div>;
  }

  return (
    <div className="py-14 mb-2 bg-gray-100">
      <div className="flex justify-center items-center">
        <div className="space-y-4 p-6 text-center max-w-screen-xl mx-auto mb-6">
          <h1 className="uppercase font-semibold text-blue-600 tracking-wider">
            Our Testimonials
          </h1>
          <p className="font-bold text-slate-900 text-3xl sm:text-4xl">
            What Travellers Say About Us
          </p>
          <p className="text-gray-500 mt-2 text-lg max-w-lg mx-auto">
            Read the experiences from our trekkers who enjoyed their journey
            with us.
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16">
        {testimonialDetails.length === 0 ? (
          <p>No testimonials available.</p>
        ) : (
          <Slider {...settings}>
            {testimonialDetails.map((item) => (
              <div key={item._id}>
                <div className="flex flex-col  p-8 shadow-lg mx-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 ">
                  <div className="flex justify-start items-center gap-4">
                    {/* Optional Profile Image */}
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-2xl font-bold text-gray-800 flex">
                        {item.name}
                      </p>
                      <p className="text-gray-500">{item.work}</p>
                    </div>
                  </div>
                  <div className="py-1 space-y-1 flex flex-col">
                    <p className="text-lg font-semibold text-indigo-700">
                      {item.trek}
                    </p>
                    <div className="flex text-yellow-500">
                      {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="text-xl">
                            ⭐
                          </span>
                        ))}
                    </div>
                    <p className="text-gray-600 text-md leading-relaxed">
                      {item.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
