import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import TrekSliderForTrekType from "./TrekSliderForTrekType";
import { useQuery } from "@tanstack/react-query";
import useGetTrekTypeButton from "../hooks/useGetTrekTypeButton";
import useGetTreksForTrekTypeById from "../hooks/useGetTreksForTrekTypeById";

function TrekTypesButtonAndSlider() {
  const {
    data: trektypeButtons = [], // Provide a default empty array
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["TrekTypeButtons"],
    queryFn: useGetTrekTypeButton,
  });

  const [activeButton, setActiveButton] = useState(null);

  // Set the first button as active once the data is fetched
  useEffect(() => {
    if (trektypeButtons.length > 0) {
      setActiveButton(trektypeButtons[0]._id);
    }
  }, [trektypeButtons]);

  const {
    data: TreksForTrekType = [],
    err,
    isLoadingTreks,
  } = useQuery({
    queryKey: ["TreksForTrekType", activeButton],
    queryFn: async () => {
      try {
        return await useGetTreksForTrekTypeById({ id: activeButton });
      } catch (error) {
        console.error("Error fetching Trek For Trek Type Using Id:", err);
        throw new Error("Failed to fetch Trek For Trek Type Using Id.");
      }
    },
  });

  // console.log("TreksForTrekType", TreksForTrekType);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap sm:flex-row flex-col py-2 mb-6 mt-0 items-center justify-center">
          <h1 className="md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body">
            Treks Based on Trek Type
          </h1>
        </div>
      </div>
      <div className="ml-10">
        {/* Buttons for filtering treks */}
        {trektypeButtons?.map((button) => (
          <button
            key={button._id} // Ensure each button has a unique key
            type="button"
            className={`${
              activeButton === button._id
                ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
            onClick={() => setActiveButton(button._id)} // Set active button on click
          >
            {button.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <TrekSliderForTrekType TreksForTrekType={TreksForTrekType} />
        )}
      </div>
    </>
  );
}

export default TrekTypesButtonAndSlider;
