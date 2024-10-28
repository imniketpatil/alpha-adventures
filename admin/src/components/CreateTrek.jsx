import React, { useState } from "react";
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
  const [altitude, setAltitude] = useState(0);
  const [trekLocation, setTrekLocation] = useState("");
  const [trekDescription, setTrekDescription] = useState("");
  const [trekSubDescription, setTrekSubDescription] = useState([
    { descTitle: "", desc: "" },
  ]);
  const [trekInfo, setTrekInfo] = useState([]);
  const [trekHighlights, setTrekHighlights] = useState([]);
  const [trekType, setTrekType] = useState("");
  const [trekInclusions, setTrekInclusions] = useState([]);
  const [trekExclusions, setTrekExclusions] = useState([]);
  const [trekCancellationPolicy, setTrekCancellationPolicy] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [withTravel, setwithTravel] = useState([
    { description: "", from: "", to: "", price: "" },
  ]);

  const [withoutTravel, setwithoutTravel] = useState([
    { description: "", from: "", to: "", price: "" },
  ]);

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
      !trekLocation ||
      !trekDescription ||
      !trekInfo.length ||
      !trekInclusions.length ||
      !trekExclusions.length ||
      !trekCancellationPolicy.length ||
      !startDate ||
      !endDate ||
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

    // Stringify the complex fields before appending them
    formData.append("subDescription", JSON.stringify(trekSubDescription));
    formData.append("trekInfo", JSON.stringify(trekInfo));

    // Optional field: Only append if it has data
    if (trekHighlights.length > 0) {
      formData.append("trekHighlights", JSON.stringify(trekHighlights));
    }

    formData.append("trekInclusions", JSON.stringify(trekInclusions));
    formData.append("trekExclusions", JSON.stringify(trekExclusions));
    formData.append(
      "trekCancellationPolicy",
      JSON.stringify(trekCancellationPolicy)
    );

    formData.append("startDate", startDate);
    formData.append("endDate", endDate);

    // Important: Stringify travel-related fields
    formData.append("withTravel", JSON.stringify(withTravel));
    formData.append("withoutTravel", JSON.stringify(withoutTravel));

    // Stringify scheduleTimeline
    formData.append("scheduleTimeline", JSON.stringify(scheduleTimeline));

    // Handle image uploads
    images.forEach((image) => {
      formData.append("trekImage", image);
    });

    try {
      console.log("formData", formData);

      mutation.mutate(formData);

      setSuccess("Trek created successfully!");
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
    setTrekSubDescription([{ descTitle: "", desc: "" }]);
    setTrekInfo([{ info: "" }]);
    setTrekHighlights([{ highlight: "" }]);
    setTrekType("");
    setTrekInclusions([{ inclusion: "" }]);
    setTrekExclusions([{ exclusion: "" }]);
    setTrekCancellationPolicy([{ trekCancellationPolicy: "" }]);
    setStartDate("");
    setEndDate("");

    setwithTravel([{ description: "", from: "", to: "", price: 0 }]);

    setwithoutTravel([{ description: "", from: "", to: "", price: 0 }]);

    setScheduleTimeline([{ day: "", time: "", work: "" }]);
    setImages([]);
    setImagePreviews([]);
    setError("");
    setSuccess("");
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length) {
      setImages(files);

      const previews = files.map((file) => URL.createObjectURL(file));

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
    <>
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

              {/* <div className="flex flex-col gap-1">
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
              </div> */}

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
              {/* <div className="flex flex-col flex-1">
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
              </div> */}

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

            <div className="flex flex-col gap-2">
              <label htmlFor="subDesc" className="mb-2 text-gray-700">
                Sub Description
              </label>
              {trekSubDescription.map((subDesc, index) => (
                <div key={index} className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Desc Title"
                    value={subDesc.descTitle}
                    onChange={(e) => {
                      const newSubDescription = [...trekSubDescription];
                      newSubDescription[index].descTitle = e.target.value;
                      setTrekSubDescription(newSubDescription);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={subDesc.desc}
                    onChange={(e) => {
                      const newSubDescription = [...trekSubDescription];
                      newSubDescription[index].desc = e.target.value;
                      setTrekSubDescription(newSubDescription);
                    }}
                    className="p-2 border border-gray-300 rounded-lg flex-1"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      const newSubDescription = [...trekSubDescription];
                      newSubDescription.splice(index, 1);
                      setTrekSubDescription(newSubDescription);
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
                  setTrekSubDescription([
                    ...trekSubDescription,
                    { descTitle: "", desc: "" },
                  ])
                }
                className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white mt-2"
              >
                Add New Description
              </button>
            </div>

            <h1 className="text-2xl font-bold text-gray-700">
              Trek Information
            </h1>
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
            <h1 className="text-2xl font-bold text-gray-700">Trek Notes</h1>
            <div className="flex flex-col">
              <label htmlFor="trekHighlights" className="mb-2 text-gray-700">
                Trek Notes
              </label>
              <AddHighlightsInTrek
                id="trekHighlights"
                trekHighlights={trekHighlights}
                setTrekHighlights={setTrekHighlights}
              />
            </div>

            <hr />
            <h1 className="text-2xl font-bold text-gray-700">
              Trek Inclusions
            </h1>

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
                    />
                    <input
                      type="text"
                      placeholder="With Travel From"
                      value={withT.price}
                      onChange={(e) => {
                        const newwithTravelDetails = [...withTravel];
                        newwithTravelDetails[index].price = e.target.value;
                        setwithTravel(newwithTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
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
                    />
                    <input
                      type="text"
                      placeholder="With Travel From"
                      value={withoutT.price}
                      onChange={(e) => {
                        const newwithoutTravelDetails = [...withoutTravel];
                        newwithoutTravelDetails[index].price = e.target.value;
                        setwithoutTravel(newwithoutTravelDetails);
                      }}
                      className="p-2 border border-gray-300 rounded-lg flex-1"
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
    </>
  );
}

export default CreateTrek;
