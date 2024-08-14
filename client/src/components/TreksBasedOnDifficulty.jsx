import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
// import useTrekDifficultyStore from "../app/trekDifficultyStore";
import LoadingSpinner from "./LoadingSpinner";
import TrekSliderComponent from "./TrekSliderComponent";
import useGetEasyTreks from "../hooks/useGetEasyTreks";
import useGetModerateTreks from "../hooks/useGetModerateTreks";
import useGetHardTreks from "../hooks/useGetHardTreks";
import TrekSliderForDifficulty from "./TrekSliderForDifficulty";
import useCourseStore from "../app/courseStore";

function TreksBasedOnDifficulty() {
  // const addTreks = useTrekDifficultyStore((state) => state.addTreks);

  const [activeButton, setActiveButton] = useState("Easy");

  const {
    data: trekbasedondifficulty = [], // Provide a default empty array
    isLoading,
  } = useQuery({
    queryKey: [activeButton],
    queryFn:
      activeButton === "Easy"
        ? useGetEasyTreks
        : activeButton === "Moderate"
        ? useGetModerateTreks
        : useGetHardTreks,
  });

  // console.log("trekbasedondifficulty", trekbasedondifficulty);

  // useEffect(() => {
  //   // if (trekbasedondifficulty.length > ) {
  //   addTreks(trekbasedondifficulty);
  //   // }
  // }, [trekbasedondifficulty, addTreks]);

  const handleButtonClick = (difficulty) => {
    setActiveButton(difficulty);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap sm:flex-row flex-col py-1 mb-6 items-center justify-center">
          <h1 className="md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body">
            Treks Based On Difficulty
          </h1>
        </div>
      </div>
      <div className="ml-10">
        {/* Buttons for filtering treks */}
        <button
          type="button"
          onClick={() => handleButtonClick("Easy")}
          className={`${
            activeButton === "Easy"
              ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
              : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        >
          Easy Treks
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("Moderate")}
          className={`${
            activeButton === "Moderate"
              ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
              : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        >
          Moderate Treks
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("Hard")}
          className={`${
            activeButton === "Hard"
              ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
              : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
          } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        >
          Difficult Treks
        </button>
      </div>
      <div className="flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <TrekSliderForDifficulty
            trekbasedondifficulty={trekbasedondifficulty}
          />
        )}
      </div>
    </>
  );
}

export default TreksBasedOnDifficulty;
