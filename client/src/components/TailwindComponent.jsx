import React, { useState } from "react";
import Bed from "/images/bed.jpeg";
import Meal from "/images/Meal.jpeg";
import Bus from "/images/Bus.png";
import Guide from "/images/Travel.jpeg";
import LocalHotelTwoToneIcon from "@mui/icons-material/LocalHotelTwoTone";
import RestaurantMenuTwoToneIcon from "@mui/icons-material/RestaurantMenuTwoTone";
import DirectionsBusTwoToneIcon from "@mui/icons-material/DirectionsBusTwoTone";
import EmojiPeopleTwoToneIcon from "@mui/icons-material/EmojiPeopleTwoTone";

const TailwindComponent = () => {
  const Perks = [
    {
      id: 1,
      image: Bed,
      title: "Stays",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: <LocalHotelTwoToneIcon />,
    },
    {
      id: 2,
      image: Meal,
      title: "Meals",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: <RestaurantMenuTwoToneIcon />,
    },
    {
      id: 3,
      image: Bus,
      title: "Transport",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: <DirectionsBusTwoToneIcon />,
    },
    {
      id: 4,
      image: Guide,
      title: "Guide",
      description:
        "Curabitur aliquam, augue sed scelerisque ultricies, nunc sapien varius sapien, a bibendum magna velit vitae odio.",
      icon: <EmojiPeopleTwoToneIcon />,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(Perks[0].image);
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id) => {
    setActiveId(id);
    const perk = Perks.find((perk) => perk.id === id);
    if (perk) {
      setSelectedImage(perk.image);
    }
  };

  return (
    <div className="overflow-hidden bg-slate-100 py-24 font-body sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-sm font-semibold leading-7 text-indigo-600">
                Explore Beyond Limits, Embrace the Journey
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Why Trek With Us
              </p>

              <dl className="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none ">
                {Perks.map((perk) => (
                  <div
                    key={perk.id}
                    className={`relative pl-9 p-2 hover:cursor-pointer ${
                      activeId === perk.id
                        ? "shadow-custom py-6    bg-white rounded-lg"
                        : ""
                    }`}
                    onClick={() => handleClick(perk.id)}
                  >
                    <dt className=" flex items-center font-semibold text-gray-900">
                      <div
                        className={`absolute ${
                          activeId === perk.id ? "left-2 top-6" : "left-2 top-2"
                        } text-indigo-600`}
                      >
                        {perk.icon}
                      </div>
                      {perk.title}
                    </dt>
                    <dd className="inline"> {perk.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected Perk"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindComponent;
