import React from "react";
import TimeLineComponent from "./TimeLineComponent.jsx";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Inclusions from "./Inclusions.jsx";
import TrekImageCarousel from "./TrekImageCarousel.jsx";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import useCourseStore from "../app/courseStore.js";
import { useQuery } from "@tanstack/react-query";
import useGetTrekDetails from "../hooks/useGetTrekDetails.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const product = {
  name: "Basic Tee 6-Pack",
  price: "₹ 5000",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://media.istockphoto.com/id/1562063612/photo/kalsubai-peak-highest-peak-of-maharashtra.jpg?s=1024x1024&w=is&k=20&c=o_HibsDJh_5Do2BvoDsMA8dK6to7nbYMhMQKfCVQirc=",
      alt: "Kalsubai Trek Image",
    },
    {
      src: "https://media.istockphoto.com/id/1562060388/photo/kalsubai-peak-highest-peak-of-maharashtra.jpg?s=1024x1024&w=is&k=20&c=0pyXeOVNwLnrd2f48lxIHJu9bkr3qrmONxEPzhn9sQs=",
      alt: "Kalsubai Trek Image",
    },
    {
      src: "https://img.etimg.com/thumb/msid-52971068,width-650,height-488,imgsize-117422,resizemode-75/.jpg",
      alt: "Kalsubai Trek Image",
    },
    {
      src: "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1681191757/bbj/zkwmet4c5dws1neriwl8.jpg",
      alt: "Kalsubai Trek Image",
    },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const trekDates = ["03-07-2024", "03-07-2024", "03-07-2024", "03-07-2024"];

export default function TrekDetailsComponent() {
  const courses = useCourseStore((state) => state.courses);

  const {
    data: trekDetail,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["trekdetails", courses],
    queryFn: async () => useGetTrekDetails(courses),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading trek details.</div>;
  }

  if (!trekDetail) {
    return <div>No trek details found.</div>;
  }

  const {
    trekName,
    trekTitle,
    suitableForAge,
    altitude,
    trekLocation,
    trekDescription,
    trekInfo,
    trekHighlights,
    trekInclusions,
    trekExclusions,
    trekCancellationPolicy,
    trekDifficulty,
    images,
    trekType,
    trekTypeDescription,
    startDate,
    endDate,
    withTravel,
    withoutTravel,
    scheduleTimeline,
  } = trekDetail;

  console.log("Trek Name:", trekName);
  console.log("Trek Title:", trekTitle);
  console.log("Suitable for Age:", suitableForAge);
  console.log("Altitude:", altitude);
  console.log("Trek Location:", trekLocation);
  console.log("Trek Description:", trekDescription);

  // Trek Info
  trekInfo.forEach((info, index) => {
    console.log(`Trek Info [${index + 1}]:`, info);
  });

  // Trek Highlights
  trekHighlights.forEach((highlight, index) => {
    console.log(`Trek Highlight [${index + 1}]:`, highlight);
  });

  // Trek Inclusions
  trekInclusions.forEach((inclusion, index) => {
    console.log(`Trek Inclusion [${index + 1}]:`, inclusion);
  });

  // Trek Exclusions
  trekExclusions.forEach((exclusion, index) => {
    console.log(`Trek Exclusion [${index + 1}]:`, exclusion);
  });

  // Trek Cancellation Policy
  trekCancellationPolicy.forEach((policy, index) => {
    console.log(`Trek Cancellation Policy [${index + 1}]:`, policy);
  });

  console.log("Trek Difficulty:", trekDifficulty);

  // Images
  images.forEach((image, index) => {
    console.log(`Image [${index + 1}]:`, image);
  });

  // Trek Type
  trekType.forEach((type, index) => {
    console.log(`Trek Type [${index + 1}]:`, type);
  });

  // Trek Type Description
  trekTypeDescription.forEach((description, index) => {
    console.log(`Trek Type Description [${index + 1}]:`, description);
  });

  // Start Dates
  startDate.forEach((date, index) => {
    console.log(`Start Date [${index + 1}]:`, new Date(date).toDateString());
  });

  // End Dates
  endDate.forEach((date, index) => {
    console.log(`End Date [${index + 1}]:`, new Date(date).toDateString());
  });

  // With Travel
  withTravel.forEach((travel, index) => {
    console.log(
      `With Travel [${index + 1}]: Description: ${travel.description}, From: ${
        travel.from
      }, To: ${travel.to}, Price: ${travel.price}`
    );
  });

  // Without Travel
  withoutTravel.forEach((travel, index) => {
    console.log(
      `Without Travel [${index + 1}]: Description: ${
        travel.description
      }, From: ${travel.from}, To: ${travel.to}, Price: ${travel.price}`
    );
  });

  // Schedule Timeline
  scheduleTimeline.forEach((timeline, index) => {
    console.log(`Schedule Timeline [Set ${index + 1}]:`);
    timeline.forEach((schedule, scheduleIndex) => {
      console.log(
        `  Day: ${schedule.day}, Time: ${schedule.time}, Work: ${schedule.work}`
      );
    });
  });

  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablet and small desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for large mobile devices
        settings: {
          slidesToShow: 2, // Show part of the next slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div
              key={index}
              className="bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer transform "
            >
              <div className="h-96 w-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-white font-body">
        <div className="pt-6">
          <div className="mx-auto max-w-2xl px-4 pb-8 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-12 lg:pt-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 flex flex-col">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {trekName}
              </h1>
              <p>Title: {trekTitle}</p>
              <p>Suitable For Age: {suitableForAge}</p>
              <p>Altitude: {altitude}</p>
              <p>Location: {trekLocation}</p>
              <p>Description: {trekDescription}</p>
              <p>Difficulty: {trekDifficulty}</p>
              <p>Type: {trekType[0]}</p>
              <p>Type Description: {trekTypeDescription[0]}</p>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight font-semibold text-gray-900">
                Price : {product.price}
              </p>

              <div className="mt-5 lg:border-gray-200 ">
                <button
                  type="submit"
                  className="mb-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md"
                >
                  Book Trek
                </button>
                <h3 className="text-xl font-medium tracking-tight text-gray-900 sm:text-3xl mb-8 mt-5">
                  Trek Dates
                </h3>
                <div>
                  <ul className="font-medium text-lg text-gray-700 flex flex-col gap-4">
                    {trekDates.map((date, index) => (
                      <div className="flex gap-3 items-center" key={index}>
                        <DateRangeIcon className="text-slate-700" />
                        Batch {index + 1} :<li>{date}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-medium tracking-tight text-gray-900 sm:text-3xl mb-8 mt-8">
                Trek Guide
              </h3>
              <div>
                <ul className="font-medium text-lg text-gray-700 flex flex-col gap-4">
                  <div className="flex gap-3 items-center">
                    <DirectionsRunIcon className="text-slate-700" />
                    <li>Rohit</li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>

          <Inclusions />

          <div className="bg-white py-24 sm:py-12 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Detailed Trek Timeline
                </h2>
              </div>
              <TimeLineComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
