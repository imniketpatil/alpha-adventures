import React from "react";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import BorderAllRoundedIcon from "@mui/icons-material/BorderAllRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import LocalPoliceRoundedIcon from "@mui/icons-material/LocalPoliceRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

function Sidebar() {
  return (
    <div className="flex-1/3 h-full ">
      <div className="flex items-center justify-center">
        <span className="text-3xl font-semibold text-blue-600 p-4 hover:cursor-pointer ">
          Alpha Admin
        </span>
      </div>
      <hr className="border-1 border-gray-300" />
      <div className="">
        <ul className="flex flex-col justify-center gap-4 my-4 text-lg font-medium">
          <p className="text-sm text-gray-400 font-semibold pl-6">MAIN</p>
          <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6 ">
            <DashboardCustomizeRoundedIcon className="text-blue-600" />
            Dashboard
          </li>{" "}
          <hr />
          <p className="text-sm text-gray-400 pl-6 ">USEFUL</p>
          <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6 ">
            <DirectionsWalkRoundedIcon className="text-blue-600" />
            Trek
          </li>
          <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6 ">
            <BorderAllRoundedIcon className="text-blue-600" />
            Trek-Type
          </li>
          <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6 ">
            <RateReviewRoundedIcon className="text-blue-600" />
            Testimonials
          </li>
          <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6 ">
            <LocalPoliceRoundedIcon className="text-blue-600" />
            Trek Guide
          </li>
          <hr />
          <p className="text-sm text-gray-400 pl-6 ">User Details</p>
          <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black  pl-6 ">
            <AccountCircleRoundedIcon className="text-blue-600" />
            User
          </li>
          <li className="flex gap-2 hover:cursor-pointer text-gray-500 hover:text-black pl-6 ">
            <ExitToAppRoundedIcon className="text-blue-600" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
