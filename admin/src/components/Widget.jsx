import React from "react";

function Widget() {
  return (
    <div className="flex flex-col flex-1 justify-between shadow-custom-multi p-4 h-40	">
      <span className="text-gray-400 font-medium text-2xl">User</span>
      <span className="text-6xl text-gray-700 font-semibold">123</span>
      <span className="text-gray-400 font-medium text-base hover:cursor-pointer">
        SEE ALL USERS
      </span>
    </div>
  );
}

export default Widget;
