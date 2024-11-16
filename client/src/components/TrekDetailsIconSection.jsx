import React from "react";
import ClimbingIcon from "/images/climbing_7358248.png";
import AgeIcon from "/images/children_547464.png";
import DurationIcon from "/images/hourglass_10932534.png";
import MountainIcon from "/images/mountain_2210008.png";
import LoadingSpinner from "./LoadingSpinner"; // Import your spinner component

const TrekDetailsIconSection = ({
  dateDifference,
  suitableForAge,
  altitude,
  trekDifficulty,
  isLoadingDate,
  isLoadingTrek,
}) => {
  const details = [
    // {
    //   imgSrc: ClimbingIcon,
    //   label: "TREK DIFFICULTY",
    //   value: trekDifficulty
    //     ? trekDifficulty.charAt(0).toUpperCase() + trekDifficulty.slice(1)
    //     : "N/A", // Provide a default value or handle the undefined case
    // },
    {
      imgSrc: DurationIcon,
      label: "DURATION",
      value: altitude ? `${altitude}` : "N/A", // Handle case where dateDifference is undefined or null
    },
    // {
    //   imgSrc: MountainIcon,
    //   label: "HIGHEST ALTITUDE",
    //   value: altitude ? `${altitude} Meters` : "N/A", // Handle case where altitude is undefined
    // },
    {
      imgSrc: AgeIcon,
      label: "AGE LIMIT",
      value: suitableForAge ? suitableForAge : "N/A", // Ensure suitableForAge is not undefined
    },
  ];

  return (
    <div className="flex justify-around py-4 bg-gray-50">
      <div className="max-w-[1450px] w-full flex flex-wrap items-center justify-around gap-4">
        {isLoadingDate || isLoadingTrek ? (
          <div className="flex justify-center items-center py-4">
            <LoadingSpinner /> {/* Display the loading spinner */}
          </div>
        ) : (
          details.map(({ imgSrc, label, value }, index) => (
            <div
              key={index}
              className="p-4 rounded-lg min-w-[250px] shadow-md bg-white flex items-center gap-4 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-101  hover:shadow-lg"
            >
              <img src={imgSrc} alt={label} className="h-12 w-12" />
              <div>
                <p className="font-bold text-sm text-gray-600 uppercase">
                  {label}
                </p>
                <p className="text-md font-semibold text-gray-900">{value}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrekDetailsIconSection;
