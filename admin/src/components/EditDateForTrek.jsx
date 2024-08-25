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

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showStartDate, setShowStartDate] = useState("");
  const [showEndDate, setShowEndDate] = useState("");
  const [withTravelDescription, setWithTravelDescription] = useState("");
  const [withTravelFrom, setwithTravelFrom] = useState("");
  const [withTravelTo, setwithTravelTo] = useState("");
  const [withTravelPrice, setWithTravelPrice] = useState("");
  const [withoutTravelDescription, setWithoutTravelDescription] = useState("");
  const [withoutTravelFrom, setWithoutTravelFrom] = useState("");
  const [withoutTravelTo, setWithoutTravelTo] = useState("");
  const [withoutTravelPrice, setWithoutTravelPrice] = useState("");
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
      setWithTravelDescription(withTravel.description);
      setwithTravelFrom(withTravel.from);
      setwithTravelTo(withTravel.to);
      setWithTravelPrice(withTravel.price);
      setWithoutTravelDescription(withoutTravel.description);
      setWithoutTravelFrom(withoutTravel.from);
      setWithoutTravelTo(withoutTravel.to);
      setWithoutTravelPrice(withoutTravel.price);
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
      !withTravelDescription ||
      !withTravelFrom ||
      !withTravelTo ||
      !withTravelPrice ||
      !withoutTravelDescription ||
      !withoutTravelFrom ||
      !withoutTravelTo ||
      !withoutTravelPrice ||
      scheduleTimeline.some(
        (timeline) => !timeline.day || !timeline.work || !timeline.time
      )
    ) {
      setFormError("All fields are required.");
      return;
    }
    setFormError("");
    setSuccess("");

    const formData = {
      startDate,
      endDate,
      withTravelDescription,
      withTravelFrom,
      withTravelTo,
      withTravelPrice,
      withoutTravelDescription,
      withoutTravelFrom,
      withoutTravelTo,
      withoutTravelPrice,
      scheduleTimeline,
    };

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
    setWithTravelDescription("");
    setwithTravelFrom("");
    setwithTravelTo("");
    setWithTravelPrice("");
    setWithoutTravelDescription("");
    setWithoutTravelFrom("");
    setWithoutTravelTo("");
    setWithoutTravelPrice("");
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
            <h1 className="text-2xl font-bold text-gray-700">Trek Prices</h1>
            <div className="flex flex-col">
              <label
                htmlFor="withTravelDescription"
                className="mb-2 text-gray-700"
              >
                With Travel Description
              </label>
              <textarea
                id="withTravelDescription"
                className="p-2 border border-gray-300 rounded-lg"
                value={withTravelDescription}
                onChange={(e) => setWithTravelDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col flex-1">
                <label htmlFor="withTravelFrom" className="mb-2 text-gray-700">
                  With Travel From
                </label>
                <input
                  type="text"
                  id="withTravelFrom"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={withTravelFrom}
                  onChange={(e) => setwithTravelFrom(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="withTravelTo" className="mb-2 text-gray-700">
                  With Travel To
                </label>
                <input
                  type="text"
                  id="withTravelTo"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={withTravelTo}
                  onChange={(e) => setwithTravelTo(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="withTravelPrice" className="mb-2 text-gray-700">
                  With Travel Price
                </label>
                <input
                  type="number"
                  id="withTravelPrice"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={withTravelPrice}
                  onChange={(e) => setWithTravelPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <hr />
            <div className="flex flex-col">
              <label
                htmlFor="withoutTravelDescription"
                className="mb-2 text-gray-700"
              >
                Without Travel Description
              </label>
              <textarea
                id="withoutTravelDescription"
                className="p-2 border border-gray-300 rounded-lg"
                value={withoutTravelDescription}
                onChange={(e) => setWithoutTravelDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="withoutTravelFrom"
                  className="mb-2 text-gray-700"
                >
                  Without Travel From
                </label>
                <input
                  type="text"
                  id="withoutTravelFrom"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={withoutTravelFrom}
                  onChange={(e) => setWithoutTravelFrom(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="withoutTravelTo" className="mb-2 text-gray-700">
                  Without Travel To
                </label>
                <input
                  type="text"
                  id="withoutTravelTo"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={withoutTravelTo}
                  onChange={(e) => setWithoutTravelTo(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="withoutTravelPrice"
                  className="mb-2 text-gray-700"
                >
                  Without Travel Price
                </label>
                <input
                  type="number"
                  id="withoutTravelPrice"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={withoutTravelPrice}
                  onChange={(e) => setWithoutTravelPrice(e.target.value)}
                  required
                />
              </div>
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
