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
    // arrows: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 3,
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
    <div className="py-14 mb-10 bg-gray-50">
      <div className="flex justify-center items-center">
        <div className="space-y-4 p-6 text-center max-w-screen-xl mx-auto mb-6">
          <h1 className="uppercase font-semibold text-blue-600 tracking-wider">
            Our Testimonials
          </h1>
          <p className="font-bold text-slate-900 text-3xl sm:text-4xl">
            What Trekkers Say About Us
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
                <div className="flex flex-col gap-4 p-8 shadow-md mx-4 rounded-xl bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xl font-semibold text-black">
                        {item.name}
                      </p>
                      <p className="text-gray-500">{item.work}</p>
                    </div>
                  </div>
                  <div className="py-6 space-y-2">
                    <p className="text-slate-900 font-bold text-lg">
                      {item.trek}
                    </p>
                    <p className="text-yellow-500">
                      {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                    </p>
                    <p className="text-gray-700">{item.comment}</p>
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
