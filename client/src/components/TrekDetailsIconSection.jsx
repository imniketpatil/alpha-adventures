import React from "react";
import ClimbingIcon from "/images/climbing_7358248.png";
import AgeIcon from "/images/children_547464.png";
import DurationIcon from "/images/hourglass_10932534.png";
import MountainIcon from "/images/mountain_2210008.png";

const TrekDetailsIconSection = ({
  dateDifference,
  suitableForAge,
  altitude,
  trekDifficulty,
}) => {
  const details = [
    {
      imgSrc: ClimbingIcon,
      label: "TREK DIFFICULTY",
      value: trekDifficulty,
    },
    {
      imgSrc: DurationIcon,
      label: "TREK DURATION",
      value: `${dateDifference} Days`,
    },
    {
      imgSrc: MountainIcon,
      label: "HIGHEST ALTITUDE",
      value: `${altitude} Meters`,
    },
    {
      imgSrc: AgeIcon,
      label: "AGE LIMIT",
      value: suitableForAge,
    },
  ];

  return (
    <div className="flex justify-around py-8 bg-gray-50">
      <div className="max-w-[1500px] w-full flex flex-wrap items-center justify-around gap-8">
        {details.map(({ imgSrc, label, value }, index) => (
          <div
            key={index}
            className="p-6 rounded-lg min-w-60 shadow-lg bg-white flex items-center gap-6 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
          >
            <img src={imgSrc} alt={label} className="h-16" />
            <div>
              <p className="font-bold text-sm text-gray-500 uppercase">
                {label}
              </p>
              <p className="text-xl font-semibold text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekDetailsIconSection;
