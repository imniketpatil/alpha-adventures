import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import PlaceIcon from "@mui/icons-material/Place";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import useGetTrekListForHome from "../hooks/useGetTrekListForHome.js";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useCourseStore from "../app/courseStore";

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
  const {
    data: treks = [], // Provide a default empty array
    error,
    isLoading,
    refetch,
  } = useQuery({ queryKey: ["TrekName"], queryFn: useGetTrekListForHome });

  // console.log("Names Of Treks", treks);

  const navigate = useNavigate();

  const [selectedTrek, setSelectedTrek] = useState(null);
  const [selectedTrekDateId, setSelectedTrekDateId] = useState(null);

  const handleTrekChange = (event, value) => {
    // console.log("Selected trek:", value);
    if (value) {
      // console.log("value", value);

      setSelectedTrek(value._id); // Set selected trek ID
      setSelectedTrekDateId(value.dates[0]);
    }
  };

  const handleButtonClick = (value) => {
    if (selectedTrek) {
      addCourse(selectedTrek);
      addDateId(selectedTrekDateId);
      // console.log("selectedTrekDateId", selectedTrekDateId);

      // navigate(`/alpha-adventures/treks/${selectedTrek}`);
    }
  };

  return (
    <div
      className="h-[60vh] lg:h-[70vh] w-full bg-center bg-cover bg-no-repeat bg-transparent bg-slate-400 flex flex-col gap-6 items-center justify-center font-body z-0"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)), url('https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <h1 className="text-4xl lg:text-5xl text-white font-semibold text-center">
        We are{" "}
        <span className="element text-4xl lg:text-5xl text-yellow-500 text-center">
          Alpha Adventures
        </span>
      </h1>
      <h1 className="text-white text-2xl font-normal text-center">
        Your Adventure Travel Partner.
      </h1>
    </div>
  );
}

export default Banner;
