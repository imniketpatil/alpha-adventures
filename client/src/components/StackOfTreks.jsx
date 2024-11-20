import React from "react";
import useCourseStore from "../app/courseStore";
import { useNavigate } from "react-router-dom";

function StackOfTreks({ treksBasedOnTrekType }) {
  const addCourse = useCourseStore((state) => state.addCourse);
  const addDateId = useCourseStore((state) => state.addDateId);

  const navigate = useNavigate();

  const handleGetInfo = (id, trekDateId) => {
    if (id && trekDateId) {
      addCourse(id);
      addDateId(trekDateId);
      navigate("/trekdetails");
    }
  };

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
            {treksBasedOnTrekType.map((trek) => {
              if (trek.dates[0])
                return (
                  <div
                    className="bg-slate-200 shadow-lg rounded-xl hover:cursor-pointer"
                    onClick={() => handleGetInfo(trek._id, trek.dates[0])}
                  >
                    <div className="relative h-56 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl overflow-hidden">
                      {/* Darkened Image */}
                      <img
                        src={trek.images[0]}
                        alt={trek.trekName}
                        className="object-cover h-full w-full opacity-70"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                        <h2 className="text-lg font-bold text-white mb-1">
                          {trek.trekName}
                        </h2>
                        <h3 className="text-sm font-medium text-gray-200">
                          {trek.trekTitle}
                        </h3>
                      </div>
                    </div>
                    {/* Info Section */}
                    {/* <div className="info flex flex-col items-start justify-start px-6 py-2 md:py-6 md:px-6 min-h-60">
                      <button className="button mb-2 md:mb-0 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
                        Get Trek
                        <span className="text-sm"> ─ Information & Dates</span>
                      </button>
                    </div> */}
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
