import React, { useContext, useState } from "react";
import AddNewTrekDateTrekIdContext from "../context/AddNewTrekDateTrekIdContext";
import addNewDateForTrek from "../hooks/addNewDateForTrek";

function AddNewTrekDateForm({ setOpenTrekForm }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [withTravelDescription, setWithTravelDescription] = useState("");
  const [withTravelFrom, setwithTravelFrom] = useState("");
  const [withTravelTo, setwithTravelTo] = useState("");
  const [withTravelPrice, setWithTravelPrice] = useState("");
  const [withoutTravelDescription, setWithoutTravelDescription] = useState("");
  const [withoutTravelFrom, setWithoutTravelFrom] = useState("");
  const [withoutTravelTo, setWithoutTravelTo] = useState("");
  const [withoutTravelPrice, setWithoutTravelPrice] = useState("");
  const [scheduleTimeline, setScheduleTimeline] = useState([
    { day: "", time: "", work: "" },
  ]);

  const { IdForTrek } = useContext(AddNewTrekDateTrekIdContext);
  const mutation = addNewDateForTrek();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
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
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("");

    // Use the last values for startDate and endDate if they are empty
    const lastStartDate = startDate || new Date().toISOString().split("T")[0];
    const lastEndDate = endDate || new Date().toISOString().split("T")[0];

    const formData = new FormData();
    formData.append("startDate", lastStartDate);
    formData.append("endDate", lastEndDate);
    formData.append("withTravelDescription", withTravelDescription);
    formData.append("withTravelFrom", withTravelFrom);
    formData.append("withTravelTo", withTravelTo);
    formData.append("withTravelPrice", withTravelPrice);
    formData.append("withoutTravelDescription", withoutTravelDescription);
    formData.append("withoutTravelFrom", withoutTravelFrom);
    formData.append("withoutTravelTo", withoutTravelTo);
    formData.append("withoutTravelPrice", withoutTravelPrice);
    formData.append("scheduleTimeline", JSON.stringify(scheduleTimeline));

    try {
      mutation.mutate({ id: IdForTrek, formData: formData });
      setSuccess("Trek created successfully!");
      resetForm();
    } catch (err) {
      setError("Failed to create trek. Please try again.");
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
              />
            </div>
          </div>
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
            />
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="withoutTravelFrom" className="mb-2 text-gray-700">
                Without Travel From
              </label>
              <input
                type="text"
                id="withoutTravelFrom"
                className="p-2 border border-gray-300 rounded-lg"
                value={withoutTravelFrom}
                onChange={(e) => setWithoutTravelFrom(e.target.value)}
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
              />
            </div>
          </div>
          <hr />
          <h1 className="text-2xl font-bold text-gray-700">Trek Schedule</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="scheduleTimeline" className="mb-2 text-gray-700">
              Schedule Timeline
            </label>
            {scheduleTimeline.map((timeline, index) => (
              <div key={index} className="flex gap-5">
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
                />
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
                  { day: "", time: "", work: "" },
                ])
              }
              className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white mt-2"
            >
              Add Schedule
            </button>
          </div>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg mt-5"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Loading..." : "Add New Date For Trek"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewTrekDateForm;
