import React, { useState } from "react";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import BorderAllRoundedIcon from "@mui/icons-material/BorderAllRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import LocalPoliceRoundedIcon from "@mui/icons-material/LocalPoliceRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import useLogout from "../hooks/useLogout.js"; // Adjust the path as necessary
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [openLogout, setLogout] = useState(false);
  const authToken = localStorage.getItem("accessToken");

  const logoutMutation = useLogout();

  const handleLogout = () => {
    setLogout((prev) => !prev);
  };

  const confirmLogout = () => {
    // console.log("refreshToken for SideBar", authToken);
    logoutMutation.mutate({ authToken });

    setLogout(false);
  };

  const cancelLogout = () => {
    setLogout(false);
  };

  return (
    <div className="relative flex-1/3 h-full">
      <div className="flex items-center justify-center">
        <span className="text-3xl font-semibold text-blue-600 p-4 hover:cursor-pointer">
          <NavLink to={"/home"}>Alpha Admin</NavLink>
        </span>
      </div>
      <hr className="border-1 border-gray-300" />
      <div className="">
        <ul className="flex flex-col justify-center gap-4 my-4 text-lg font-medium">
          <p className="text-sm text-gray-400 font-semibold pl-6">MAIN</p>
          <NavLink to={"/home"}>
            <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6">
              <DashboardCustomizeRoundedIcon className="text-blue-600" />
              Dashboard
            </li>
          </NavLink>
          <hr />
          <p className="text-sm text-gray-400 pl-6">USEFUL</p>
          <NavLink to={"/trektype"}>
            <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6">
              <BorderAllRoundedIcon className="text-blue-600" />
              Trek-Type
            </li>
          </NavLink>

          <NavLink to={"/treks"}>
            <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6">
              <DirectionsWalkRoundedIcon className="text-blue-600" />
              Trek
            </li>
          </NavLink>
          <hr />
          <p className="text-sm text-gray-400 pl-6">Guides and Members</p>

          <NavLink to={"/trekguides"}>
            <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6">
              <LocalPoliceRoundedIcon className="text-blue-600" />
              Trek Guide
            </li>
          </NavLink>
          <hr />
          <p className="text-sm text-gray-400 pl-6">Travellers Testimonials</p>
          <NavLink to={"/testimonials"}>
            <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6">
              <RateReviewRoundedIcon className="text-blue-600" />
              Testimonials
            </li>
          </NavLink>
          <hr />
          <p className="text-sm text-gray-400 pl-6">Log-Out</p>
          <NavLink to={"/user"}>
            <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6">
              <AccountCircleRoundedIcon className="text-blue-600" />
              User
            </li>
          </NavLink>
          <li
            className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6"
            onClick={handleLogout}
          >
            <ExitToAppRoundedIcon className="text-blue-600" />
            Logout
          </li>
        </ul>
      </div>

      {openLogout && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <p className="mb-4">Do you really want to logout?</p>
            <div className="flex justify-around">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={confirmLogout}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-500"
                onClick={cancelLogout}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
