import React, { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import TrekSliderComponent from "./TrekSliderComponent";
import { useQuery } from "@tanstack/react-query";
import useGetUpcommingTreks from "../hooks/useGetUpcommingTreks";
import useTrekStore from "../app/trekStore";

function UpcomingTreks() {
  const addTreks = useTrekStore((state) => state.addTreks);

  const {
    data: upcommingtrekslist = [], // Provide a default empty array
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["UpcomingTrekList"],
    queryFn: useGetUpcommingTreks,
  });

  // Add treks only if there are items in upcommingtrekslist
  useEffect(() => {
    if (upcommingtrekslist.length > 0) {
      addTreks(upcommingtrekslist);
    }
  }, [upcommingtrekslist, addTreks]);

  return (
    <>
      <div className="flex flex-col">
        {/* <div className="h-1 bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-yellow-500"></div>
        </div> */}
        <div className="flex flex-wrap sm:flex-row flex-col py-2 mt-0 items-center justify-center">
          <h1 className="md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body">
            Upcoming Treks
          </h1>
        </div>
      </div>
      <div className="ml-10">
        {/* Buttons for filtering treks */}
        <button
          type="button"
          className=" border border-blue-700  bg-blue-500 ring-4 outline-none text-white ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Upcomming Treks
        </button>
      </div>
      <div className="flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14">
        {isLoading ? <LoadingSpinner /> : <TrekSliderComponent />}
      </div>
    </>
  );
}

export default UpcomingTreks;
