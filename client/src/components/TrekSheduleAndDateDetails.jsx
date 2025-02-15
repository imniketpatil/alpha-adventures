import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ScheduleTimeline from "./ScheduleTimeline";

const TrekSheduleAndDateDetails = React.memo(
  ({ withTravel, withoutTravel, scheduleTimeline }) => {
    // Check if trekDateData has at least one element

    // Initialize flags for travel options
    let hasWithTravel = false;
    let hasWithoutTravel = false;

    // Check for price details if firstTrek exists
    if (withTravel || withoutTravel) {
      if (withTravel?.length > 0 && withTravel[0]?.description !== "") {
        hasWithTravel = true;
      }
      if (withoutTravel?.length > 0 && withoutTravel[0]?.description !== "") {
        hasWithoutTravel = true;
      }
    }

    // console.log(withTravel);
    // console.log(withoutTravel);

    return (
      <div className="container mx-auto max-w-[1450px] w-full px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl pt-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* With Travel Section */}
          {hasWithTravel && (
            <div className="flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-md flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                With Travel
              </h2>
              {withTravel.map((data) => (
                <div className="space-y-4 w-full my-4" key={data?._id}>
                  <p className="text-gray-700 text-base md:text-md font-medium">
                    {data?.description}
                  </p>
                  {data?.from && (
                    <>
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <p className="flex gap-2 items-center text-md md:text-lg font-bold text-gray-700">
                          <LocationOnIcon className="text-blue-600" />
                          From: {data?.from}
                        </p>
                        <p className="flex gap-2 items-center text-md md:text-lg font-bold text-gray-700">
                          <LocationOnIcon className="text-blue-600" />
                          To: {data?.to}
                        </p>
                      </div>
                      <p className="flex items-center text-md md:text-lg font-bold text-gray-700">
                        Price: {data?.price}{" "}
                        {/* <CurrencyRupeeIcon className="ml-1" /> */}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Without Travel Section */}
          {hasWithoutTravel && (
            <div className="flex flex-col justify-center items-center p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-md flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Without Travel
              </h2>
              {withoutTravel.map((data) => (
                <div className="space-y-4 w-full my-4" key={data?._id}>
                  <p className="text-gray-700 text-base md:text-md font-medium">
                    {data?.description}
                  </p>
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <p className="flex gap-2 items-center text-md md:text-lg font-bold text-gray-700">
                      <LocationOnIcon className="text-blue-600" />
                      From: {data?.from}
                    </p>
                    <p className="flex gap-2 items-center text-md md:text-lg font-bold text-gray-700">
                      <LocationOnIcon className="text-blue-600" />
                      To: {data?.to}
                    </p>
                  </div>
                  <p className="flex items-center text-md md:text-lg font-bold text-gray-700">
                    Price: {data?.price}
                    {/* <CurrencyRupeeIcon className="ml-1" /> */}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trek Timeline Section */}
        <div className="p-6 md:p-8 lg:p-10 rounded-lg bg-white shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
            Timeline
          </h2>
          <ScheduleTimeline scheduleTimeline={scheduleTimeline} />
        </div>
      </div>
    );
  }
);

export default TrekSheduleAndDateDetails;
