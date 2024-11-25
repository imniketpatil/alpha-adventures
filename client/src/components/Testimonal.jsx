import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import useGetTestimonials from "../hooks/useGetTestimonials";
import TestimonialSlider from "./TestimonialSlider";

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

      <div className="container overflow-hidden px-2 pt-8  lg:pt-8 mx-auto">
        <TestimonialSlider />
      </div>
    </div>
  );
}
