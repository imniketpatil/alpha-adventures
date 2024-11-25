import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import useGetTestimonials from "../hooks/useGetTestimonials";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonial() {
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

      <div className="container overflow-hidden mx-auto">
        <TestimonialSlider />
      </div>
    </div>
  );
}
