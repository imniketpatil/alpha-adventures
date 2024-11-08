import React, { useState } from "react";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CelebrationIcon from "@mui/icons-material/Celebration";
import VrpanoIcon from "@mui/icons-material/Vrpano";
import GroupsIcon from "@mui/icons-material/Groups";
import RecyclingIcon from "@mui/icons-material/Recycling";
import HikingIcon from "@mui/icons-material/Hiking";
import UnmatchedSafetyStandards from "/images/Unmatched Safety Standards.png";
import ExceptionalCustomerExperience from "/images/Exceptional Customer Experience.jpg";
import PassionateandDedicatedTeam from "/images/Passionate and Dedicated Team.jpg";
import FunFilledandEngagingJourneys from "/images/Fun-Filled and Engaging Journeys.jpg";
import LifeChangingPerspectives from "/images/Life-Changing Perspectives.jpg";
import IMG_7451 from "/images/IMG_7451.jpg";
import AdventureforAllLevels from "/images/Adventure for All Levels.jpg";
import Slider from "react-slick";

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
      image: UnmatchedSafetyStandards,
    },
    {
      id: 2,
      title: "Exceptional Customer Experience",
      points: [
        "We tailor each trek to your preferences for a seamless experience.",
        "Continuous improvement based on your feedback ensures better journeys.",
      ],
      icon: <AutoAwesomeIcon fontSize="medium" />,
      image: ExceptionalCustomerExperience,
    },
    {
      id: 3,
      title: "Passionate and Dedicated Team",
      points: [
        "Our guides are passionate adventurers committed to your experience.",
        "Their enthusiasm makes every trek joyful and enriching.",
      ],
      icon: <GroupsIcon fontSize="medium" />,
      image: PassionateandDedicatedTeam,
    },
    {
      id: 4,
      title: "Fun-Filled and Engaging Journeys",
      points: [
        "Incorporate fun activities and cultural experiences during treks.",
        "Every moment is an opportunity for laughter and memories.",
      ],
      icon: <CelebrationIcon fontSize="medium" />,
      image: FunFilledandEngagingJourneys,
    },
    {
      id: 5,
      title: "Life-Changing Perspectives",
      points: [
        "Treks foster a deep connection with nature and new life perspectives.",
        "Rediscover yourself and your place in the world through our adventures.",
      ],
      icon: <VrpanoIcon fontSize="medium" />,
      image: LifeChangingPerspectives,
    },
    {
      id: 6,
      title: "Commitment to Eco-Friendly Practices",
      points: [
        "Follow strict Leave No Trace principles to preserve natural beauty.",
        "Your trekking helps protect pristine landscapes for future generations.",
      ],
      icon: <RecyclingIcon fontSize="medium" />,
      image: IMG_7451,
    },
    {
      id: 7,
      title: "Adventure for All Levels",
      points: [
        "Wide range of treks caters to all fitness levels and interests.",
        "Everyone can experience the thrill of the outdoors with us.",
      ],
      icon: <HikingIcon fontSize="medium" />,
      image: AdventureforAllLevels,
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

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="text-black bg-slate-100 body-font lg:mt-0 pb-6 font-body">
      <div className="container px-2 pt-8  lg:pt-4 mx-auto">
        <div className="flex flex-wrap sm:m-4 mx-4 mb-10 mt-8 items-center justify-center gap-5 ">
          <div className="flex flex-col justify-center items-center lg:pr-8 lg:pt-4">
            <h2 className="text-sm font-semibold text-center leading-7 text-indigo-600">
              Explore Beyond Limits, Embrace the Journey
            </h2>
            <p className="mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
              Why Trip With Us
            </p>
          </div>
          <div className="w-full">
            <div className="w-[98%] m-auto">
              {uniqueSellingPoints.length === 0 ? (
                <p>No treks available at the moment.</p>
              ) : (
                <Slider {...settings}>
                  {uniqueSellingPoints.map((trek, index) => {
                    const [loading, setLoading] = useState(true);
                    return (
                      <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl"
                      >
                        {/* Image Section */}
                        <div className="h-56 bg-gradient-to-r from-indigo-500 to-blue-500 flex justify-start items-center rounded-t-xl overflow-hidden relative">
                          {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
                              <div className="spinner">Loading...</div>
                            </div>
                          )}
                          <img
                            src={trek.image}
                            alt={trek.title}
                            className={`object-cover h-full w-full ${
                              loading ? "hidden" : ""
                            }`}
                            onLoad={() => setLoading(false)}
                          />
                        </div>

                        {/* Info Section */}
                        <div className="min-h-60 info flex flex-col items-start justify-center px-6 py-4 md:py-6 md:px-6">
                          <div className="flex text-indigo-600 items-start gap-4 flex-[1]">
                            <span>{trek.icon}</span>
                            <h2 className="text-lg w-full font-bold text-indigo-600 mb-1 md:mb-2 text-start ">
                              {trek.title}
                            </h2>
                          </div>
                          <ul className=" text-gray-600 text-sm mt-2 space-y-2 flex-[1]">
                            {trek.points.map((point, idx) => (
                              <li
                                key={idx}
                                className="text-md w-full font-medium text-gray-700 mb-2 md:mb-4 "
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailwindComponent;
