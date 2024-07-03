import React, { useState, useEffect } from "react";
import TimeLineComponent from "./TimeLineComponent.jsx";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Inclusions from "./Inclusions.jsx";
import TrekImageCarousel from "./TrekImageCarousel.jsx";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

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
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
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
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const trekDates = ["03-07-2024", "03-07-2024", "03-07-2024", "03-07-2024"];

export default function TrekDetailsComponent() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white font-body">
      <div className="pt-6">
        {/* <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav> */}

        {/* Image gallery */}
        <TrekImageCarousel product={product} />

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-8 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-12 lg:pt-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
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
            {/* Reviews */}
            {/* <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div> */}

            {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>

              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <label
                      key={color.name}
                      className={classNames(
                        color.selectedClass,
                        "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400"
                      )}
                      style={{
                        border: "1px solid black",
                        padding: "3px",
                        margin: "5px",
                      }}
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value={color.name}
                        className="sr-only"
                        aria-labelledby={`color-choice-${color.name}-label`}
                        onChange={() => setSelectedColor(color)}
                      />
                      <span
                        id={`color-choice-${color.name}-label`}
                        aria-hidden="true"
                        className={classNames(
                          color.class,
                          "h-8 w-8 rounded-full border border-black border-opacity-10"
                        )}
                      />
                    </label>
                  ))}
                </div>
              </fieldset>
            </div> */}

            {/* <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>

              <fieldset className="mt-4">
                <legend className="sr-only">Choose a size</legend>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      type="button"
                      className={classNames(
                        size.inStock
                          ? "bg-white text-gray-900 shadow-sm"
                          : "bg-gray-50 text-gray-200",
                        "group relative flex items-center justify-center rounded-md border border-gray-200 py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                      )}
                      disabled={!size.inStock}
                      onClick={() => setSelectedSize(size)}
                    >
                      <span>{size.name}</span>

                      <span
                        className={classNames(
                          size.inStock ? "border" : "border-2",
                          "absolute -inset-px rounded-md pointer-events-none"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
              </fieldset>
            </div> */}
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

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

        {/* Inclusions */}
        <Inclusions />

        {/* Timeline */}
        <div className="bg-white py-24 sm:py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
                Trek Timeline
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Overview of the Trek
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Detailed information about the trek, what to expect, and key
                highlights.
              </p>
            </div>
            <div className="mt-10">
              <TimeLineComponent dates={trekDates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
