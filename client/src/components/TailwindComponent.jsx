import React, { useState } from "react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CelebrationIcon from "@mui/icons-material/Celebration";
import VrpanoIcon from "@mui/icons-material/Vrpano";
import GroupsIcon from "@mui/icons-material/Groups";
import RecyclingIcon from "@mui/icons-material/Recycling";
import HikingIcon from "@mui/icons-material/Hiking";
import PolicyIcon from "@mui/icons-material/Policy";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import HealingIcon from "@mui/icons-material/Healing";

const TailwindComponent = () => {
  const uniqueSellingPoints = [
    {
      id: 1,
      title: "Unmatched Safety Standards",
      points: [
        "Your safety is our top priority; we follow industry-leading safety protocols.",
        "Guides are trained in first aid and emergency response for your peace of mind.",
      ],
      icon: <HealthAndSafetyIcon fontSize="medium" />,
    },
    {
      id: 2,
      title: "Exceptional Customer Experience",
      points: [
        "We tailor each trek to your preferences for a seamless experience.",
        "Continuous improvement based on your feedback ensures better journeys.",
      ],
      icon: <AutoAwesomeIcon fontSize="medium" />,
    },
    {
      id: 3,
      title: "Passionate and Dedicated Team",
      points: [
        "Our guides are passionate adventurers committed to your experience.",
        "Their enthusiasm makes every trek joyful and enriching.",
      ],
      icon: <GroupsIcon fontSize="medium" />,
    },
    {
      id: 4,
      title: "Fun-Filled and Engaging Journeys",
      points: [
        "Incorporate fun activities and cultural experiences during treks.",
        "Every moment is an opportunity for laughter and memories.",
      ],
      icon: <CelebrationIcon fontSize="medium" />,
    },
    {
      id: 5,
      title: "Life-Changing Perspectives",
      points: [
        "Treks foster a deep connection with nature and new life perspectives.",
        "Rediscover yourself and your place in the world through our adventures.",
      ],
      icon: <VrpanoIcon fontSize="medium" />,
    },
    {
      id: 6,
      title: "Commitment to Eco-Friendly Practices",
      points: [
        "Follow strict Leave No Trace principles to preserve natural beauty.",
        "Your trekking helps protect pristine landscapes for future generations.",
      ],
      icon: <RecyclingIcon fontSize="medium" />,
    },
    {
      id: 7,
      title: "Adventure for All Levels",
      points: [
        "Wide range of treks caters to all fitness levels and interests.",
        "Everyone can experience the thrill of the outdoors with us.",
      ],
      icon: <HikingIcon fontSize="medium" />,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(
    uniqueSellingPoints[0].image
  );
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id) => {
    setActiveId(id);
    const perk = uniqueSellingPoints.find((perk) => perk.id === id);
    if (perk) {
      setSelectedImage(perk.image);
    }
  };

  return (
    <div className="overflow-hidden bg-slate-100 py-24 font-body sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 ">
          {/* Content Column */}
          <div className="flex flex-col justify-center items-center lg:pr-8 lg:pt-4">
            <h2 className="text-sm font-semibold text-center leading-7 text-indigo-600">
              Explore Beyond Limits, Embrace the Journey
            </h2>
            <p className="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
              Why Trek With Us
            </p>

            <dl className="mt-10 max-w-xl space-y-6 text-base leading-7 text-gray-600 lg:max-w-none">
              {uniqueSellingPoints.map((perk) => (
                <div
                  key={perk.id}
                  className={`relative p-4 transition-transform transform rounded-lg shadow-lg hover:shadow-xl  bg-white ${
                    activeId === perk.id
                      ? "border-2 border-indigo-600"
                      : "border border-transparent"
                  }`}
                  onClick={() => handleClick(perk.id)}
                >
                  <dt className="flex items-center font-semibold text-gray-900 justify-center">
                    <div className="mr-3 text-indigo-600">{perk.icon}</div>
                    {perk.title}
                  </dt>
                  {perk.points.map((point) => (
                    <dd className="mt-1 text-gray-600 text-center">{point}</dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>
          {/* Image Column */}
          <div className="flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected Perk"
              className="max-w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindComponent;
