import React, { useState, useEffect } from "react";
import updateDateDetails from "../hooks/updateDateDetails";
import getDateDetailsById from "../hooks/getDateDetailsById";
import { useQuery } from "@tanstack/react-query";

import useIdStore from "../app/IdStore";
import LoadingSpinner from "./LoadingSpinner";

// Utility function to format dates as dd-mm-yyyy
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

function EditDateForTrek() {
  const trekId = useIdStore((state) => state.trekId);

  const {
    data: fetchedTrekGuide,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getDateDetailsById", trekId],
    queryFn: async () => getDateDetailsById(trekId),
  });

  console.log(fetchedTrekGuide);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showStartDate, setShowStartDate] = useState("");
  const [showEndDate, setShowEndDate] = useState("");
  const [withTravel, setwithTravel] = useState([
    { description: "", from: "", to: "", price: 0 },
  ]);

  const [withoutTravel, setwithoutTravel] = useState([
    { description: "", from: "", to: "", price: 0 },
  ]);

  const [scheduleTimeline, setScheduleTimeline] = useState([]);

  useEffect(() => {
    if (fetchedTrekGuide) {
      const { startDate, endDate, priceData, trekTimelineData } =
        fetchedTrekGuide;
      const { withTravel, withoutTravel } = priceData;

      setStartDate(startDate);
      setEndDate(endDate);
      setShowStartDate(formatDate(startDate));
      setShowEndDate(formatDate(endDate));
      setwithoutTravel(
        withoutTravel || [{ description: "", from: "", to: "", price: 0 }]
      );
      setwithTravel(
        withTravel || [{ description: "", from: "", to: "", price: 0 }]
      );
      setScheduleTimeline(trekTimelineData.scheduleTimeline || []);
    }
  }, [fetchedTrekGuide]);

  const mutation = updateDateDetails();

  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !startDate ||
      !endDate ||
      withTravel.some(
        (withT) =>
          !withT.description || !withT.from || !withT.to || !withT.price
      ) ||
      withoutTravel.some(
        (withoutT) =>
          !withoutT.description ||
          !withoutT.from ||
          !withoutT.to ||
          !withoutT.price
      ) ||
      scheduleTimeline.some(
        (timeline) => !timeline.day || !timeline.work || !timeline.time
      )
    ) {
      setFormError("All fields are required.");
      return;
    }
    setFormError("");
    setSuccess("");

    const formData = new FormData();

    formData.append("startDate", startDate);
    formData.append("endDate", endDate);

    // Important: Stringify travel-related fields
    formData.append("withTravel", JSON.stringify(withTravel));
    formData.append("withoutTravel", JSON.stringify(withoutTravel));

    // Stringify scheduleTimeline
    formData.append("scheduleTimeline", JSON.stringify(scheduleTimeline));

    try {
      await mutation.mutateAsync({ id: trekId, formData });
      setSuccess("Trek updated successfully!");
      resetForm();
    } catch (err) {
      setFormError("Failed to update trek. Please try again.");
    }
  };

  const resetForm = () => {
    setStartDate("");
    setEndDate("");
    setwithTravel([{ description: "", from: "", to: "", price: 0 }]);
    setwithoutTravel([{ description: "", from: "", to: "", price: 0 }]);
    setScheduleTimeline([{ day: "", time: "", work: "" }]);
    setFormError("");
    setSuccess("");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <div className="w-full max-w-8xl flex flex-col">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg gap-5">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Edit Trek Details
          </h2>
          {formError && <p className="text-red-500 text-center">{formError}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form className="flex flex-col gap-5 h-[80%]" onSubmit={handleSubmit}>
            <hr />
            <h1 className="text-2xl font-bold text-gray-700">Trek Date</h1>
            <div className="flex gap-5">
              <div className="flex flex-col flex-1">
                <label htmlFor="startDate" className="mb-2 text-gray-700">
                  Start Date
                </label>
                <div className="flex items-center gap-5">
                  <p className="text-gray-700 text-lg font-medium">
                    Trek Start Date : {showStartDate}
                  </p>
                  <input
                    type="date"
                    id="startDate"
                    className="p-2 border border-gray-300 rounded-lg"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      setShowStartDate(formatDate(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="endDate" className="mb-2 text-gray-700">
                  End Date
                </label>
                <div className="flex items-center gap-5">
                  <p className="text-gray-700 text-lg font-medium">
                    Trek End Date : {showEndDate}
                  </p>
                  <input
                    type="date"
                    id="endDate"
                    className="p-2 border border-gray-300 rounded-lg"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                      setShowEndDate(formatDate(e.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <label htmlFor="WithTravel" className="mb-2 text-gray-700">
                With Travel
              </label>
              {withTravel.map((withT, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <div className="flex ">
                    <input
                      type="text"
                      placeholder="With Travel Description"
                      value={withT.description}
                      onChange={(e) => {
                        const newwithTravelDetails = [...withTravel];
                        newwithTravelDetails[index].description =
                          e.target.value;
                        setwithTravel(newwithTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="With Travel To"
                      value={withT.from}
                      onChange={(e) => {
                        const newwithTravelDetails = [...withTravel];
                        newwithTravelDetails[index].from = e.target.value;
                        setwithTravel(newwithTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                    <input
                      type="text"
                      placeholder="With Travel Price"
                      value={withT.to}
                      onChange={(e) => {
                        const newwithTravelDetails = [...withTravel];
                        newwithTravelDetails[index].to = e.target.value;
                        setwithTravel(newwithTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                    <input
                      type="number"
                      placeholder="With Travel From"
                      value={withT.price}
                      onChange={(e) => {
                        const newwithTravelDetails = [...withTravel];
                        newwithTravelDetails[index].price = e.target.value;
                        setwithTravel(newwithTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const newwithTravelDetails = [...withTravel];
                      newwithTravelDetails.splice(index, 1);
                      setwithTravel(newwithTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg bg-red-500 text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setwithTravel([
                    ...withTravel,
                    { description: "", from: "", to: "", price: 0 },
                  ])
                }
                className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white mt-2"
              >
                Add Schedule
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="WithoutTravel" className="mb-2 text-gray-700">
                Without Travel
              </label>
              {withoutTravel.map((withoutT, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <div className="flex ">
                    <input
                      type="text"
                      placeholder="With Travel Description"
                      value={withoutT.description}
                      onChange={(e) => {
                        const newwithTravelDetails = [...withoutTravel];
                        newwithTravelDetails[index].description =
                          e.target.value;
                        setwithoutTravel(newwithTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="With Travel To"
                      value={withoutT.from}
                      onChange={(e) => {
                        const newwithoutTravelDetails = [...withoutTravel];
                        newwithoutTravelDetails[index].from = e.target.value;
                        setwithoutTravel(newwithoutTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                    <input
                      type="text"
                      placeholder="With Travel Price"
                      value={withoutT.to}
                      onChange={(e) => {
                        const newwithoutTravelDetails = [...withoutTravel];
                        newwithoutTravelDetails[index].to = e.target.value;
                        setwithoutTravel(newwithoutTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                    <input
                      type="number"
                      placeholder="With Travel From"
                      value={withoutT.price}
                      onChange={(e) => {
                        const newwithoutTravelDetails = [...withoutTravel];
                        newwithoutTravelDetails[index].price = e.target.value;
                        setwithoutTravel(newwithoutTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const newwithoutTravelDetails = [...withoutTravel];
                      newwithoutTravelDetails.splice(index, 1);
                      setwithoutTravel(newwithoutTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg bg-red-500 text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setwithoutTravel([
                    ...withoutTravel,
                    { description: "", from: "", to: "", price: 0 },
                  ])
                }
                className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white mt-2"
              >
                Add Schedule
              </button>
            </div>
            <hr />
            <div>
              <h2 className="text-2xl font-bold text-gray-700">Timeline</h2>
              <button
                type="button"
                onClick={() =>
                  setScheduleTimeline([
                    ...scheduleTimeline,
                    { day: "", time: "", work: "" },
                  ])
                }
                className="mt-2 text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              >
                Add Day
              </button>
            </div>
            <div className="timeline-container">
              {scheduleTimeline.map((timeline, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-2 border border-gray-200 rounded-lg"
                >
                  <label
                    htmlFor={`day-${index}`}
                    className="mb-2 text-gray-700"
                  >
                    Day {index + 1}
                  </label>
                  <div className="flex gap-5">
                    <div className="flex flex-col flex-1">
                      <input
                        type="text"
                        id={`day-${index}`}
                        className="p-2 border border-gray-300 rounded-lg"
                        placeholder="Day"
                        value={timeline.day}
                        onChange={(e) =>
                          setScheduleTimeline(
                            scheduleTimeline.map((item, i) =>
                              i === index
                                ? { ...item, day: e.target.value }
                                : item
                            )
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-lg"
                        placeholder="Time"
                        value={timeline.time}
                        onChange={(e) =>
                          setScheduleTimeline(
                            scheduleTimeline.map((item, i) =>
                              i === index
                                ? { ...item, time: e.target.value }
                                : item
                            )
                          )
                        }
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-lg"
                        placeholder="Work"
                        value={timeline.work}
                        onChange={(e) =>
                          setScheduleTimeline(
                            scheduleTimeline.map((item, i) =>
                              i === index
                                ? { ...item, work: e.target.value }
                                : item
                            )
                          )
                        }
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setScheduleTimeline(
                          scheduleTimeline.filter((_, i) => i !== index)
                        )
                      }
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
            >
              Update Trek Details
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditDateForTrek;
