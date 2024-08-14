import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useTrekPricingStore from "../app/trekPricingStore";
import LoadingSpinner from "./LoadingSpinner";
import useGetTrekPriceDesc from "../hooks/useGetTrekPriceDesc";
import useGetTrekPriceAsc from "../hooks/useGetTrekPriceAsc"; // Assuming you have a hook for ascending prices
import TrekSliderForPrice from "./TrekSliderForPrice";

function TrekBasedOnPrice() {
  const addTreks = useTrekPricingStore((state) => state.addTreks);
  const [activeButton, setActiveButton] = useState("PricingHighToLow");

  const {
    data: trekbasedonprice = [], // Provide a default empty array
    isLoading,
  } = useQuery({
    queryKey: [
      activeButton === "PricingHighToLow" ? "HighPriceTrek" : "LowPriceTrek",
    ],
    queryFn:
      activeButton === "PricingHighToLow"
        ? useGetTrekPriceDesc
        : useGetTrekPriceAsc,
  });

  useEffect(() => {
    if (trekbasedonprice.length > 0) {
      addTreks(trekbasedonprice);
    }
  }, [trekbasedonprice, addTreks]);

  // console.log("trekbasedonprice", trekbasedonprice);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap sm:flex-row flex-col py-1 mb-6 items-center justify-center">
          <h1 className="md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body">
            Treks Based On Pricing
          </h1>
        </div>
      </div>
      <div className="ml-10">
        {/* Buttons for filtering treks */}
        <button
          type="button"
          onClick={() => setActiveButton("PricingHighToLow")}
          className={`${
            activeButton === "PricingHighToLow"
              ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
              : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        >
          Pricing High To Low
        </button>
        <button
          type="button"
          onClick={() => setActiveButton("PricingLowToHigh")}
          className={`${
            activeButton === "PricingLowToHigh"
              ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
              : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        >
          Pricing Low To High
        </button>
      </div>
      <div className="flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14">
        {isLoading ? <LoadingSpinner /> : <TrekSliderForPrice />}
      </div>
    </>
  );
}

export default TrekBasedOnPrice;
