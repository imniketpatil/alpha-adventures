import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import PlaceIcon from "@mui/icons-material/Place";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import treks from "../db/data"; // Importing treks as default export
import { useNavigate } from "react-router-dom";

function Banner() {
  useEffect(() => {
    const typed = new Typed(".element", {
      strings: ["Alpha Adventures."],
      typeSpeed: 200,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [trek, setTrek] = useState("");

  const navigate = useNavigate();

  const [selectedTrek, setSelectedTrek] = useState(null);

  const handleTrekChange = (event, value) => {
    setSelectedTrek(value);
    // Navigate to a new route with the selected trek value as a parameter
    navigate(`/alpha-adventures/treks/${selectedTrek}`);
  };

  return (
    <div
      className="h-[70vh] w-full bg-center bg-cover bg-no-repeat bg-slate-400 flex flex-col gap-6 items-center justify-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)), url('https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <h1 className="text-5xl text-white font-semibold text-center">
        We are{" "}
        <span className="element text-5xl text-yellow-500 text-center">
          Alpha Adventures
        </span>
      </h1>
      <h1 className="text-white text-2xl font-semibold text-center">
        Your Adventure Travel Partner.
      </h1>
      <div className="flex bg-white items-center w-[60%] max-w-[720px] lg:w-content justify-around px-1 border-4 py-2 lg:py-0 border-yellow-500 absolute bottom-[-35px] flex-row h-content ">
        <div className="flex items-center">
          <PlaceIcon />
          <Autocomplete
            onChange={handleTrekChange}
            className="block py-0 lg:py-2 pr-2 pl-2 outline-white"
            disablePortal
            id="combo-box-demo"
            options={Object.keys(treks).map((name) => treks[name].name)}
            sx={{ width: [100, 150, 220] }}
            renderInput={(params) => (
              <TextField
                id="trek-search" // Provide a unique id for the TextField
                {...params}
                label="Treks"
              />
            )}
          />
        </div>

        <div>
          <button
            className="px-4 md:px-6 py-2 md:py-3 bg-sky-600 border border-sky-600 text-white rounded-lg hover:bg-sky-600 font-semibold"
            onClick={handleTrekChange}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
