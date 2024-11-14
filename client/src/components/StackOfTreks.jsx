import React from "react";
import useCourseStore from "../app/courseStore";
import { useNavigate } from "react-router-dom";

function StackOfTreks({ treksBasedOnTrekType }) {
  console.log(treksBasedOnTrekType);

  const addCourse = useCourseStore((state) => state.addCourse);
  const addDateId = useCourseStore((state) => state.addDateId);

  const navigate = useNavigate();

  const handleGetInfo = (id, trekDateId) => {
    if (id && trekDateId) {
      console.log(id);

      addCourse(id);
      addDateId(trekDateId);
      navigate("/trekdetails");
    }
  };

  return (
    <div className="max-w-screen-lg px-4 py-10 mx-auto">
      {treksBasedOnTrekType.length === 0 ? (
        <div className="flex justify-center h-screen">
          <p className="text-xl text-gray-500">
            No tripss available at the moment.
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <p className="text-2xl text-gray-900 font-bold mb-5">
              {treksBasedOnTrekType[0].trekType}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {treksBasedOnTrekType.map((trek) => (
              <div
                key={trek._id}
                className="bg-white p-6 rounded-xl shadow-lg  flex flex-col md:flex-row gap-6"
              >
                {/* Image Section */}
                <div className="w-full md:w-[300px] overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={trek.images[0]}
                    alt={trek.name}
                    className="w-full h-64 object-cover "
                  />
                </div>

                {/* Trek Details Section */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-2xl  font-bold text-gray-800">
                      {trek.trekName}
                    </h2>
                    <p className="text-md font-semibold text-gray-800 mt-2">
                      {trek.trekTitle}
                    </p>
                    <p className="text-md font-semibold text-gray-800 mt-1">
                      {trek.trekLocation}
                    </p>
                  </div>

                  <p className="text-md font-semibold text-gray-800 ">
                    Suitable for Ages : {trek.suitableForAge}
                  </p>

                  <div className="mt-0 md:mt-0">
                    {/* <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-800"> */}
                    {/* {trek.altitude}m Height */}
                    {/* </span>
                      <span className="bg-green-600 text-white text-md px-3 py-1 rounded-md"> */}
                    {/* {trek.trekDifficulty.charAt(0).toUpperCase() +
                          trek.trekDifficulty.slice(1)} */}
                    {/* </span>
                    </div> */}

                    {/* <div className="flex items-center justify-between">
                      <p className="text-md font-semibold text-gray-800 mt-2">
                        Start Date :{" "}
                        {new Date(trek.startDate).toLocaleDateString("en-GB")}
                      </p> */}
                    <p className="text-md font-semibold text-gray-800 ">
                      Duration : {trek.altitude}
                    </p>

                    {/* </div> */}

                    <button
                      className="w-full mt-4 bg-blue-600 text-white text-lg font-bold py-2 rounded-lg transition duration-300 hover:bg-blue-700"
                      onClick={() => handleGetInfo(trek._id, trek.dates[0])}
                    >
                      Get More Details For {trek.trekName}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default StackOfTreks;
