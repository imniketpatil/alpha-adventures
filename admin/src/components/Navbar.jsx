import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import client_url from "../utility/config";

const fetchCurrentUser = async () => {
  const response = await axios.get(`${client_url}/users/currentuser`, {
    withCredentials: true,
  });

  return response.data.data;
};

function Navbar() {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({ queryKey: ["currentUser"], queryFn: fetchCurrentUser });

  const navigate = useNavigate();

  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowUserInfo(true);
  };

  const handleMouseLeave = () => {
    setShowUserInfo(false);
  };

  const navigateToUser = () => {
    navigate("/user");
  };

  return (
    <div className="w-full flex justify-end bg-white p-4">
      <div className="self-end mr-10 flex justify-center items-center gap-2">
        <AccountCircleRoundedIcon
          className="text-2xl rounded-full hover:cursor-pointer text-blue-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={navigateToUser}
        />

        {user && (
          <>
            <p
              className="text-xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={navigateToUser}
            >
              @{user.username}
            </p>
            {showUserInfo && (
              <div className="absolute top-10 right-20 bg-gray-100 p-2 rounded-lg shadow-lg">
                <p className="text-gray-800 text-sm font-semibold">
                  Username: {user.username}
                </p>
                <p className="text-gray-600 text-xs">Name: {user.fullName}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
