import React from "react";
import useCourseStore from "../app/courseStore";
import { useNavigate } from "react-router-dom";

function StackOfTreks({ TreksForTrekType }) {
  const addCourse = useCourseStore((state) => state.addCourse);
  const addDateId = useCourseStore((state) => state.addDateId);
  console.log(TreksForTrekType);

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
      {TreksForTrekType.length === 0 ? null : (
        <div className="flex flex-col">
          {/* Trek Type Header */}
          <div className="flex flex-wrap sm:flex-row flex-col py-2 mb-6 mt-0 items-center justify-center">
            <h1 className="md:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center font-body">
              {TreksForTrekType[0]?.trekType || "Trek Type"}
            </h1>
          </div>
        </div>
      )}

      {TreksForTrekType.length === 0 ? (
        <div className="flex justify-center h-screen">
          <p className="text-xl text-gray-500">
            No treks available at the moment.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {TreksForTrekType.map((trek) => (
            <div
              key={trek._id}
              className="bg-white p-6 rounded-xl shadow-lg transform transition duration-500  hover:shadow-xl flex flex-col md:flex-row gap-6"
            >
              {/* Image Section */}
              <div className="w-full md:w-[300px] h-60  rounded-lg flex-shrink-0">
                <img
                  src={trek.images[0]}
                  alt={trek.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Trek Details Section */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {trek.trekName}
                  </h2>
                  <p className="text-md text-gray-500 mt-2">{trek.trekTitle}</p>
                  <p className="text-sm text-gray-900 mt-1 mb-2">
                    {trek.trekLocation}
                  </p>
                </div>

                <div className="mt-6 sm:mt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-700">
                      {trek.altitude} Meters Height
                    </span>
                    <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-md">
                      {trek.trekDifficulty.charAt(0).toUpperCase() +
                        trek.trekDifficulty.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Suitable for Ages : {trek.suitableForAge}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Trek Date :{" "}
                    {new Date(trek.startDate).toLocaleDateString("en-GB")}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Duration: {trek.dateDifference}
                  </p>
                  <button
                    className="w-full mt-4 bg-blue-600 text-white text-lg font-bold py-2 rounded-lg transition duration-300 hover:bg-blue-700"
                    onClick={() => handleGetInfo(trek._id, trek.trekDateId)}
                  >
                    Check More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StackOfTreks;
