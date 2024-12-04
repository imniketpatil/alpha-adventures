import React, { useState } from "react";
import useCourseStore from "../app/courseStore";
import { useNavigate, useSearchParams } from "react-router-dom";

function StackOfTreks({ treksBasedOnTrekType }) {
  // const addCourse = useCourseStore((state) => state.addCourse);
  // const addDateId = useCourseStore((state) => state.addDateId);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const trekId = searchParams.get("trekId");
  const trekDateId = searchParams.get("trekDateId");

  // State to track the hovered trek index (but no longer the hovered image index)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleGetInfo = (trekId, trekDateId) => {
    if (trekId && trekDateId) {
      const link = `treks?${trekId ? `trekId=${trekId}` : ""}${
        trekDateId ? `&trekDateId=${trekDateId}` : ""
      }`;
      navigate(`/${link}`);
    }
  };

  // const handleGetInfo = (id, trekDateId) => {
  //   if (id && trekDateId) {
  //     addCourse(id);
  //     addDateId(trekDateId);
  //     navigate("/trekdetails");
  //   }
  // };

  return (
    <div className="max-w-screen-xl px-4 py-10 mx-auto">
      {treksBasedOnTrekType.length === 0 ? (
        <div className="flex justify-center h-screen">
          <p className="text-xl text-gray-500">
            No trips available at the moment.
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <p className="text-2xl text-gray-900 font-bold mb-5">
              {treksBasedOnTrekType[0].trekType}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treksBasedOnTrekType.map((trek, index) => {
              if (trek.dates[0])
                return (
                  <div
                    key={trek._id}
                    className="group bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer"
                    onClick={() => handleGetInfo(trek._id, trek.dates[0])}
                    onMouseEnter={() => setHoveredIndex(index)} // Only track hovered index
                    onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered index on mouse leave
                  >
                    <div className="relative h-56 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl overflow-hidden">
                      {/* Image stays the same, no change on hover */}
                      <img
                        src={trek.images[0]} // Always use the first image
                        alt={trek.trekName}
                        className="object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                        {/* Hide text on hover */}
                        <h2
                          className={`text-lg font-bold text-white mb-1 ${
                            hoveredIndex === index ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          {trek.trekName}
                        </h2>
                        <h3
                          className={`text-sm font-medium text-gray-200 ${
                            hoveredIndex === index ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          {trek.trekTitle}
                        </h3>
                      </div>
                      {/* Hover Text */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-white text-lg font-bold text-center">
                          Get Details
                        </span>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default StackOfTreks;
