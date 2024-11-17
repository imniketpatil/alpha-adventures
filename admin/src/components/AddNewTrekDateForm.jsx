import React, { useContext, useEffect, useState } from "react";
import AddNewTrekDateTrekIdContext from "../context/AddNewTrekDateTrekIdContext";
import addNewDateForTrek from "../hooks/addNewDateForTrek";
import useIdStore from "../app/IdStore";
import { useQuery } from "@tanstack/react-query";
import getTrekDetailsById from "../hooks/getTrekDetailsById";

function AddNewTrekDateForm({ setOpenTrekForm }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [withTravel, setWithTravel] = useState([
    { description: "", from: "", to: "", price: "" },
  ]);
  const [withoutTravel, setWithoutTravel] = useState([
    { description: "", from: "", to: "", price: "" },
  ]);
  const [scheduleTimeline, setScheduleTimeline] = useState([]);

  const { IdForTrek } = useContext(AddNewTrekDateTrekIdContext);
  const mutation = addNewDateForTrek();

  const trekId = useIdStore((state) => state.trekId);

  const {
    data: fetchedTrekData,
    err,
    isLoading,
  } = useQuery({
    queryKey: ["getDateDetailsById", trekId],
    queryFn: async () => getTrekDetailsById(trekId),
  });

  console.log("fetchedTrekData", fetchedTrekData);
  console.log(trekId);

  useEffect(() => {
    if (fetchedTrekData) {
      // const { startDate, endDate, priceData, trekTimelineData } =
      //   fetchedTrekData;
      // const { withTravel, withoutTravel } = priceData;

      // setStartDate(startDate);
      // setEndDate(endDate);

      setWithoutTravel(
        fetchedTrekData.withoutTravel || [
          { description: "", from: "", to: "", price: "" },
        ]
      );
      setWithTravel(
        fetchedTrekData.withTravel || [
          { description: "", from: "", to: "", price: "" },
        ]
      );
      setScheduleTimeline(fetchedTrekData.scheduleTimeline || []);
    }
  }, [fetchedTrekData]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate required fields
    if (
      !startDate ||
      !endDate ||
      scheduleTimeline.some(
        (timeline) => !timeline.day || !timeline.work || !timeline.time
      )
    ) {
      setError("All fields are required.");
      return;
    }

    // Create a formData object to send to the server
    const formData = {
      startDate,
      endDate,
      withTravel,
      withoutTravel,
      scheduleTimeline,
    };

    try {
      await mutation.mutateAsync({ id: IdForTrek, formData });
      setSuccess("Trek date created successfully!");
      resetForm();
    } catch (err) {
      setError("Failed to create trek date. Please try again.");
      console.error("Error creating trek date:", err);
    }
  };

  const resetForm = () => {
    setStartDate("");
    setEndDate("");
    setWithTravel([{ description: "", from: "", to: "", price: "" }]);
    setWithoutTravel([{ description: "", from: "", to: "", price: "" }]);
    setScheduleTimeline([{ day: "", time: "", work: "" }]);
    setError("");
    setSuccess("");
  };

  return (
    <div className="w-full max-w-8xl flex flex-col">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg gap-5">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Submit New Trek
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form className="flex flex-col gap-5 h-[80%]" onSubmit={handleSubmit}>
          <hr />
          <h1 className="text-2xl font-bold text-gray-700">Trek Date</h1>
          <div className="flex gap-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="startDate" className="mb-2 text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="p-2 border border-gray-300 rounded-lg"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="endDate" className="mb-2 text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="p-2 border border-gray-300 rounded-lg"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <label htmlFor="WithTravel" className="mb-2 text-gray-700">
              With Travel
            </label>
            {withTravel.map((withT, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="With Travel Description"
                    value={withT.description}
                    onChange={(e) => {
                      const newWithTravelDetails = [...withTravel];
                      newWithTravelDetails[index].description = e.target.value;
                      setWithTravel(newWithTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="From"
                    value={withT.from}
                    onChange={(e) => {
                      const newWithTravelDetails = [...withTravel];
                      newWithTravelDetails[index].from = e.target.value;
                      setWithTravel(newWithTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                  <input
                    type="text"
                    placeholder="To"
                    value={withT.to}
                    onChange={(e) => {
                      const newWithTravelDetails = [...withTravel];
                      newWithTravelDetails[index].to = e.target.value;
                      setWithTravel(newWithTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    value={withT.price}
                    onChange={(e) => {
                      const newWithTravelDetails = [...withTravel];
                      newWithTravelDetails[index].price = e.target.value;

                      setWithTravel(newWithTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newWithTravelDetails = [...withTravel];
                    newWithTravelDetails.splice(index, 1);
                    setWithTravel(newWithTravelDetails);
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
                setWithTravel([
                  ...withTravel,
                  { description: "", from: "", to: "", price: "" },
                ])
              }
              className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white mt-2"
            >
              Add With Travel
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="WithoutTravel" className="mb-2 text-gray-700">
              Without Travel
            </label>
            {withoutTravel.map((withoutT, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Without Travel Description"
                    value={withoutT.description}
                    onChange={(e) => {
                      const newWithoutTravelDetails = [...withoutTravel];
                      newWithoutTravelDetails[index].description =
                        e.target.value;
                      setWithoutTravel(newWithoutTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="From"
                    value={withoutT.from}
                    onChange={(e) => {
                      const newWithoutTravelDetails = [...withoutTravel];
                      newWithoutTravelDetails[index].from = e.target.value;
                      setWithoutTravel(newWithoutTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                  <input
                    type="text"
                    placeholder="To"
                    value={withoutT.to}
                    onChange={(e) => {
                      const newWithoutTravelDetails = [...withoutTravel];
                      newWithoutTravelDetails[index].to = e.target.value;
                      setWithoutTravel(newWithoutTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    value={withoutT.price}
                    onChange={(e) => {
                      const newWithoutTravelDetails = [...withoutTravel];
                      newWithoutTravelDetails[index].price = e.target.value;

                      setWithoutTravel(newWithoutTravelDetails);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newWithoutTravelDetails = [...withoutTravel];
                    newWithoutTravelDetails.splice(index, 1);
                    setWithoutTravel(newWithoutTravelDetails);
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
                setWithoutTravel([
                  ...withoutTravel,
                  { description: "", from: "", to: "", price: "" },
                ])
              }
              className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white mt-2"
            >
              Add Without Travel
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="scheduleTimeline" className="mb-2 text-gray-700">
              Schedule Timeline
            </label>
            {scheduleTimeline.map((timeline, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Day"
                    value={timeline.day}
                    onChange={(e) => {
                      const newTimeline = [...scheduleTimeline];
                      newTimeline[index].day = e.target.value;
                      setScheduleTimeline(newTimeline);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Work"
                    value={timeline.work}
                    onChange={(e) => {
                      const newTimeline = [...scheduleTimeline];
                      newTimeline[index].work = e.target.value;
                      setScheduleTimeline(newTimeline);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Time"
                    value={timeline.time}
                    onChange={(e) => {
                      const newTimeline = [...scheduleTimeline];
                      newTimeline[index].time = e.target.value;
                      setScheduleTimeline(newTimeline);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newTimeline = [...scheduleTimeline];
                    newTimeline.splice(index, 1);
                    setScheduleTimeline(newTimeline);
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
                setScheduleTimeline([
                  ...scheduleTimeline,
                  { day: "", work: "", time: "" },
                ])
              }
              className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white mt-2"
            >
              Add Timeline
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="p-2 border border-gray-300 rounded-lg bg-green-500 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewTrekDateForm;
