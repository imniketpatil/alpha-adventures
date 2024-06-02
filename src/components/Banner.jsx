import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import PlaceIcon from "@mui/icons-material/Place";
import { Autocomplete } from "@mui/material";
import { top100Films } from "../db/data";
import TextField from "@mui/material/TextField";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";

function Banner() {
  useEffect(() => {
    let typed = new Typed(".element", {
      strings: ["Alpha Adventures."],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div
      className="h-[70vh] w-full bg-center bg-cover bg-no-repeat bg-slate-400 flex flex-col gap-6 items-center justify-center relative "
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)), url('https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <h1 className="text-5xl text-white font-semibold text-center">
        We are{" "}
        <span className="element text-5xl text-yellow-500 text-center">
          {" "}
          Alpha Adventures
        </span>
      </h1>
      <h1 className="text-white text-2xl font-semibold text-center">
        Your Adventure Travel Partner.
      </h1>
      <div className=" flex bg-white items-center w-[60%] lg:w-[60%] justify-between px-1 border-4 py-2 lg:py-0 border-yellow-500 absolute bottom-[-130px] lg:bottom-[-35px] flex-col lg:flex-row h-[250px] lg:h-[80px] ">
        <div className="flex items-center">
          <PlaceIcon />
          <Autocomplete
            className="block py-0 lg:py-2 pr-2 pl-2 outline-white"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: [100, 150, 220] }}
            renderInput={(params) => <TextField {...params} label="Treks" />}
          />
        </div>
        <div className="flex items-center relative">
          <CalendarMonthIcon className="text-slate-600" />
          <span
            onClick={() => {
              setOpenDate(!openDate);
            }}
            className="text-lg font-semibold text-slate-500 text-center "
          >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-12"
            />
          )}
        </div>
        <div>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-600 font-semibold ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
