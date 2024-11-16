import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Ensure you import NavLink

function DateDropDown({ allStartDate = [] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTrekListClick = (id, startDate) => {
    // console.log(`Selected Trek ID: ${id}`, startDate); // Replace this with actual navigation or state update logic
  };

  return (
    <>
      <button
        id="dropdownNavbarLink"
        onClick={handleDropdownToggle}
        className="flex items-center w-full justify-between py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-400 "
      >
        Treks{" "}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownNavbar"
        className={`z-10 font-normal md:w-[60%] lg:w-44 w-[90%] divide-y divide-gray-100 rounded-lg shadow  ${
          isDropdownOpen ? "fixed" : "hidden"
        }`}
      >
        <ul
          className="absolute py-2 pr-4 pl-3 w-full rounded text-sm bg-gray-900 lg:-left-16 text-gray-700 "
          aria-labelledby="dropdownLargeButton"
        >
          {Array.isArray(allStartDate) && allStartDate.length > 0 ? (
            allStartDate.map((startDate) => (
              <li key={startDate._id} className="py-2 pr-4 pl-3 lg:p-0 ">
                <NavLink to="/trekdetails">
                  <div
                    className="block px-4 py-2 hover:bg-gray-100 "
                    onClick={() =>
                      handleTrekListClick(startDate._id, startDate)
                    }
                  >
                    {startDate.date} {/* Adjust the field as per your data */}
                  </div>
                </NavLink>
              </li>
            ))
          ) : (
            <li className="py-2 pr-4 pl-3 lg:p-0 text-gray-400">
              No available dates.
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default DateDropDown;
