import React, { useEffect, useState } from "react";
import DropDownCheckBoxForTrekType from "./DropDownCheckBoxForTrekType";
import AddHighlightsInTrek from "./AddHighlightsInTrek";
import AddInfoForTrek from "./AddInfoForTrek";
import AddInclusionForTrek from "./AddInclusionForTrek";
import AddExclusionForTrek from "./AddExclusionForTrek";
import AddCancellationPolicyForTrek from "./AddCancellationPolicyForTrek";
import useCreateTrek from "../hooks/useCreateTrek";

function CreateTrek({ setOpenTrekForm }) {
  const [trekName, setTrekName] = useState("");
  const [trekTitle, setTrekTitle] = useState("");
  const [trekDifficulty, setTrekDifficulty] = useState("easy");
  const [suitableForAge, setSuitableForAge] = useState("Suitable For All");
  const [altitude, setAltitude] = useState(null);
  const [trekLocation, setTrekLocation] = useState("");
  const [trekDescription, setTrekDescription] = useState("");
  const [trekInfo, setTrekInfo] = useState([]);
  const [trekHighlights, setTrekHighlights] = useState([]);
  const [trekType, setTrekType] = useState("");
  const [trekInclusions, setTrekInclusions] = useState([]);
  const [trekExclusions, setTrekExclusions] = useState([]);
  const [trekCancellationPolicy, setTrekCancellationPolicy] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [withTravelDescription, setWithTravelDescription] = useState("");
  const [withTravelFrom, setwithTravelFrom] = useState("");
  const [withTravelTo, setwithTravelTo] = useState("");

  const [withTravelPrice, setWithTravelPrice] = useState(null);
  const [withoutTravelDescription, setWithoutTravelDescription] = useState("");
  const [withoutTravelFrom, setWithoutTravelFrom] = useState("");
  const [withoutTravelTo, setWithoutTravelTo] = useState("");
  const [withoutTravelPrice, setWithoutTravelPrice] = useState(null);
  const [scheduleTimeline, setScheduleTimeline] = useState([
    { day: "", time: "", work: "" },
  ]);

  const mutation = useCreateTrek();

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !trekName ||
      !trekTitle ||
      !altitude ||
      !trekLocation ||
      !trekDescription ||
      !trekInfo.length ||
      !trekHighlights.length ||
      !trekInclusions.length ||
      !trekExclusions.length ||
      !trekCancellationPolicy.length ||
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
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("trekName", trekName);
    formData.append("trekTitle", trekTitle);
    formData.append("altitude", altitude);
    formData.append("trekDifficulty", trekDifficulty);

    formData.append("trekLocation", trekLocation);
    formData.append("trekType", trekType);
    formData.append("suitableForAge", suitableForAge);
    formData.append("trekDescription", trekDescription);
    formData.append("trekInfo", JSON.stringify(trekInfo));
    formData.append("trekHighlights", JSON.stringify(trekHighlights));
    formData.append("trekInclusions", JSON.stringify(trekInclusions));
    formData.append("trekExclusions", JSON.stringify(trekExclusions));
    formData.append(
      "trekCancellationPolicy",
      JSON.stringify(trekCancellationPolicy)
    );
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("withTravelDescription", withTravelDescription);
    formData.append("withTravelFrom", withTravelFrom);
    formData.append("withTravelTo", withTravelTo);
    formData.append("withTravelPrice", withTravelPrice);
    formData.append("withoutTravelDescription", withoutTravelDescription);
    formData.append("withoutTravelFrom", withoutTravelFrom);
    formData.append("withoutTravelTo", withoutTravelTo);
    formData.append("withoutTravelPrice", withoutTravelPrice);
    formData.append("scheduleTimeline", JSON.stringify(scheduleTimeline));

    images.forEach((image) => {
      formData.append("trekImage", image); // Ensure 'trekImage' matches your server-side expectation
    });

    for (const [key, value] of formData.entries()) {
      // console.log(`${key}: ${value}`);
    }

    try {
      mutation.mutate(formData);

      setSuccess("Trek created successfully!");
      // resetForm();
      // console.log(formData);
    } catch (err) {
      setError("Failed to create trek. Please try again.");
    }
  };

  const resetForm = () => {
    setTrekName("");
    setTrekTitle("");
    setTrekDifficulty("easy");
    setSuitableForAge("Suitable For All");
    setAltitude(0);
    setTrekLocation("");
    setTrekDescription("");
    setTrekInfo([{ info: "" }]);
    setTrekHighlights([{ highlight: "" }]);
    setTrekType("");
    setTrekInclusions([{ inclusion: "" }]);
    setTrekExclusions([{ exclusion: "" }]);
    setTrekCancellationPolicy([{ trekCancellationPolicy: "" }]);
    setStartDate("");
    setEndDate("");
    setWithTravelDescription("");
    setwithTravelFrom("");
    setwithTravelTo("");
    setWithTravelPrice(0);
    setWithoutTravelDescription("");
    setWithoutTravelFrom("");
    setWithoutTravelTo("");
    setWithoutTravelPrice(0);
    setScheduleTimeline([{ day: "", time: "", work: "" }]);
    setImages([]);
    setImagePreviews([]);
    setError("");
    setSuccess("");
    // console.log("Form has been reset");
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    // console.log("Selected files:", files); // Debugging line

    if (files.length) {
      setImages(files);

      const previews = files.map((file) => URL.createObjectURL(file));
      // console.log("Image previews:", previews); // Debugging line

      setImagePreviews(previews);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  return (
    <div className="w-full max-w-8xl flex flex-col ">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg gap-5">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Submit New Trek
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form className="flex flex-col gap-5 h-[80%]" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-gray-700">Trek Details</h1>
          <div className="flex gap-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="trekName" className="mb-2 text-gray-700">
                Trek Name
              </label>
              <input
                type="text"
                id="trekName"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekName}
                onChange={(e) => setTrekName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="trekTitle" className="mb-2 text-gray-700">
                Trek Title
              </label>
              <input
                type="text"
                id="trekTitle"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekTitle}
                onChange={(e) => setTrekTitle(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="trekDifficulty" className="mb-2 text-gray-700">
                Trek Difficulty
              </label>
              <select
                id="trekDifficulty"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekDifficulty}
                onChange={(e) => setTrekDifficulty(e.target.value)}
                required
              >
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="suitableForAge" className="mb-2 text-gray-700">
                Trek Suitable For Age
              </label>
              <input
                type="text"
                id="trekTitle"
                className="p-2 border border-gray-300 rounded-lg"
                value={suitableForAge}
                onChange={(e) => setSuitableForAge(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="TrekType" className="mb-2 text-gray-700">
                Trek Type
              </label>
              <DropDownCheckBoxForTrekType
                trekType={trekType}
                setTrekType={setTrekType}
                required={false}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="altitude" className="mb-2 text-gray-700">
                Altitude
              </label>
              <input
                type="number"
                id="altitude"
                className="p-2 border border-gray-300 rounded-lg"
                value={altitude}
                onChange={(e) => setAltitude(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col flex-1">
              <label htmlFor="trekLocation" className="mb-2 text-gray-700">
                Trek Location
              </label>
              <input
                type="text"
                id="trekLocation"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekLocation}
                onChange={(e) => setTrekLocation(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="trekDescription" className="mb-2 text-gray-700">
              Trek Description
            </label>
            <textarea
              id="trekDescription"
              className="p-2 border border-gray-300 rounded-lg"
              value={trekDescription}
              onChange={(e) => setTrekDescription(e.target.value)}
              required
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-700">Trek Information</h1>
          <div className="flex flex-col">
            <label htmlFor="trekInfo" className="mb-2 text-gray-700">
              Trek Information
            </label>
            <AddInfoForTrek
              id="trekInfo"
              trekInfo={trekInfo}
              setTrekInfo={setTrekInfo}
            />
          </div>

          <hr />
          <h1 className="text-2xl font-bold text-gray-700">Trek Highlights</h1>
          <div className="flex flex-col">
            <label htmlFor="trekHighlights" className="mb-2 text-gray-700">
              Trek Highlights
            </label>
            <AddHighlightsInTrek
              id="trekHighlights"
              trekHighlights={trekHighlights}
              setTrekHighlights={setTrekHighlights}
            />
          </div>

          <hr />
          <h1 className="text-2xl font-bold text-gray-700">Trek Inclusions</h1>

          <div className="flex flex-col">
            <label htmlFor="trekInfo" className="mb-2 text-gray-700">
              Trek Inclusions
            </label>
            <AddInclusionForTrek
              id="trekInfo"
              trekInclusions={trekInclusions}
              setTrekInclusions={setTrekInclusions}
            />
          </div>

          <hr />
          <h1 className="text-2xl font-bold text-gray-700">Trek Exclusion</h1>

          <div className="flex flex-col">
            <label htmlFor="trekInfo" className="mb-2 text-gray-700">
              Trek Exclusion
            </label>
            <AddExclusionForTrek
              id="trekInfo"
              trekExclusions={trekExclusions}
              setTrekExclusions={setTrekExclusions}
            />
          </div>

          <hr />
          <h1 className="text-2xl font-bold text-gray-700">
            Trek Cancellation Policy
          </h1>

          <div className="flex flex-col">
            <label htmlFor="trekInfo" className="mb-2 text-gray-700">
              Trek Cancellation Policy
            </label>
            <AddCancellationPolicyForTrek
              id="trekInfo"
              trekCancellationPolicy={trekCancellationPolicy}
              setTrekCancellationPolicy={setTrekCancellationPolicy}
            />
          </div>

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
                required
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
                required
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
              <label htmlFor="withoutTravelFrom" className="mb-2 text-gray-700">
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

          <div className="flex flex-col">
            <label htmlFor="images" className="mb-2 text-gray-700">
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border border-gray-300 rounded-lg"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <img
                    src={preview}
                    alt={`Preview ${index}`}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg mt-5"
          >
            Create Trek
          </button>
        </form>
        <button
          onClick={() => setOpenTrekForm(false)}
          className="p-2 bg-red-500 text-white rounded-lg mt-5"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateTrek;
