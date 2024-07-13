import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const fetchCurrentUser = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/users/currentuser",
    {
      withCredentials: true, // To send cookies with the request
    }
  );

  return response.data.data;
};

function Navbar() {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({ queryKey: ["currentUser"], queryFn: fetchCurrentUser });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowUserInfo(true);
  };

  const handleMouseLeave = () => {
    setShowUserInfo(false);
  };

  const navigateToUser = () => {
    navigate("/user"); // Navigate to /user route using navigate function
  };

  return (
    <div className="w-full flex justify-end bg-white p-4">
      <div className="self-end mr-10 flex justify-center items-center gap-2">
        <AccountCircleRoundedIcon
          className="text-2xl rounded-full hover:cursor-pointer text-blue-500"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={navigateToUser} // Call navigateToUser function on click
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
