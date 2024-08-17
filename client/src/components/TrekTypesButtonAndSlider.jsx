import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import TrekSliderForTrekType from "./TrekSliderForTrekType";
import { useQuery } from "@tanstack/react-query";
import useGetTrekTypeButton from "../hooks/useGetTrekTypeButton";
import useGetTreksForTrekTypeById from "../hooks/useGetTreksForTrekTypeById";
import useCourseStore from "../app/courseStore";

function TrekTypesButtonAndSlider() {
  const addTrekTypeId = useCourseStore((state) => state.addTrekTypeId);
  const trekTypeId = useCourseStore((state) => state.trekTypeId);

  const {
    data: trektypeButtons = [],
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
    if (trektypeButtons.length > 0 && !activeButton) {
      const firstButtonId = trektypeButtons[0]._id;
      setActiveButton(firstButtonId);
      addTrekTypeId(firstButtonId);
    }
  }, [trektypeButtons, activeButton, addTrekTypeId]);

  const {
    data: TreksForTrekType = [],
    error: treksError,
    isLoading: isLoadingTreks,
  } = useQuery({
    queryKey: ["TreksForTrekType", trekTypeId],
    queryFn: async () => {
      try {
        return await useGetTreksForTrekTypeById({ id: trekTypeId });
      } catch (error) {
        console.error("Error fetching Treks For Trek Type Using Id:", error);
        throw new Error("Failed to fetch Treks For Trek Type Using Id.");
      }
    },
    enabled: !!trekTypeId, // Ensure the query is only enabled if trekTypeId is set
  });

  // Handle button click and set the active button
  const handleButtonClick = (id) => {
    setActiveButton(id);
    addTrekTypeId(id);
  };

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
        {trektypeButtons.map((button) => (
          <button
            key={button._id}
            type="button"
            className={`${
              activeButton === button._id
                ? "border border-blue-700 bg-blue-500 ring-4 outline-none text-white ring-blue-300"
                : "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:bg-blue-500 focus:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
            onClick={() => handleButtonClick(button._id)}
          >
            {button.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 lg:gap-14">
        {isLoading || isLoadingTreks ? (
          <LoadingSpinner />
        ) : (
          <TrekSliderForTrekType TreksForTrekType={TreksForTrekType} />
        )}
      </div>
    </>
  );
}

export default TrekTypesButtonAndSlider;
