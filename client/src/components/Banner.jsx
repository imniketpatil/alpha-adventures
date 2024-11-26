import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import useCourseStore from "../app/courseStore";
import HomeBannerBG from "/images/pexels-photo-746386.jpeg";

function Banner() {
  useEffect(() => {
    const typed = new Typed(".element", {
      strings: ["Alpha Adventures."],
      typeSpeed: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const addCourse = useCourseStore((state) => state.addCourse);
  const addDateId = useCourseStore((state) => state.addDateId);

  const [selectedTrek, setSelectedTrek] = useState(null);
  const [selectedTrekDateId, setSelectedTrekDateId] = useState(null);

  const handleTrekChange = (event, value) => {
    if (value) {
      setSelectedTrek(value._id);
      setSelectedTrekDateId(value.dates[0]);
    }
  };

  const handleButtonClick = (value) => {
    if (selectedTrek) {
      addCourse(selectedTrek);
      addDateId(selectedTrekDateId);
    }
  };

  const HomeBanner = "/images/pexels-photo-746386.jpeg";

  return (
    <div
      className="h-[60vh] lg:h-[70vh] w-full bg-center bg-cover bg-no-repeat bg-transparent bg-slate-400 flex flex-col gap-6 items-center justify-center font-body z-0"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)), url(${HomeBannerBG})`,
      }}
    >
      <h1 className="text-2xl lg:text-4xl text-white font-semibold text-center">
        We are{" "}
        <span className="element text-2xl lg:text-4xl text-yellow-500 text-center">
          Alpha Adventures
        </span>
      </h1>
      <h1 className="text-white text-xl font-normal text-center">
        Raw, Wild, Untamed
      </h1>
    </div>
  );
}

export default Banner;
