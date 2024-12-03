import React, { useEffect, useState } from "react";
import DropDownCheckBoxForTrekType from "./DropDownCheckBoxForTrekType";
import AddHighlightsInTrek from "./AddHighlightsInTrek";
import AddInfoForTrek from "./AddInfoForTrek";
import AddInclusionForTrek from "./AddInclusionForTrek";
import AddExclusionForTrek from "./AddExclusionForTrek";
import AddCancellationPolicyForTrek from "./AddCancellationPolicyForTrek";
import getTrekDetailsById from "../hooks/getTrekDetailsById";
import { useQuery } from "@tanstack/react-query";
import useEditTrek from "../hooks/useEditTrek";
import useIdStore from "../app/IdStore";
import LoadingSpinner from "../components/LoadingSpinner";

function EditTrekForm({ setOpenTrekForm }) {
  const [trekName, setTrekName] = useState("");
  const [trekTitle, setTrekTitle] = useState("");
  const [trekOffer, setTrekOffer] = useState("");

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
  const [trekTypeId, setTrekTypeId] = useState("");

  const loading = useIdStore((state) => state.loading);

  const [trekInclusions, setTrekInclusions] = useState([]);
  const [trekExclusions, setTrekExclusions] = useState([]);
  const [trekCancellationPolicy, setTrekCancellationPolicy] = useState([]);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const mutation = useEditTrek();

  const trekId = useIdStore((state) => state.trekId);

  const {
    data: fetchedTrekData,
    err,
    isLoading,
  } = useQuery({
    queryKey: ["getDateDetailsById", trekId],
    queryFn: async () => getTrekDetailsById(trekId),
  });

  // console.log("fetchedTrekData", fetchedTrekData);

  useEffect(() => {
    if (fetchedTrekData) {
      const {
        trekName,
        trekTitle,
        trekDifficulty,
        trekOffer,
        suitableForAge,
        altitude,
        trekLocation,
        trekDescription,
        subDescription,
        trekInfo,
        trekHighlights,
        trekTypeName,
        trekTypeNameId,
        trekInclusions,
        trekExclusions,
        trekCancellationPolicy,
      } = fetchedTrekData;

      setTrekName(trekName || "");
      setTrekTitle(trekTitle || "");
      setTrekOffer(trekOffer || "");

      setTrekDifficulty(trekDifficulty || "hide");
      setSuitableForAge(suitableForAge || "Suitable For All");
      setAltitude(altitude || 0);
      setTrekLocation(trekLocation || "");
      setTrekDescription(trekDescription || "");
      setTrekSubDescription(subDescription || [{ descTitle: "", desc: "" }]);
      setTrekInfo(trekInfo || []);
      setTrekHighlights(trekHighlights || []);
      setTrekType(trekTypeName || "");
      setTrekTypeId(trekTypeNameId || "");
      setTrekInclusions(trekInclusions || []);
      setTrekExclusions(trekExclusions || []);
      setTrekCancellationPolicy(trekCancellationPolicy || []);
    }
  }, [fetchedTrekData]);

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
      !trekCancellationPolicy.length
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("trekName", trekName);
    formData.append("trekTitle", trekTitle);
    formData.append("trekOffer", trekOffer || "");

    formData.append("altitude", altitude);
    formData.append("trekDifficulty", trekDifficulty);
    formData.append("trekLocation", trekLocation);
    formData.append("trekType", trekTypeId);

    formData.append("suitableForAge", suitableForAge);
    formData.append("trekDescription", trekDescription);
    formData.append("subDescription", JSON.stringify(trekSubDescription));

    formData.append("trekInfo", JSON.stringify(trekInfo));
    if (trekHighlights.length > 0) {
      formData.append("trekHighlights", JSON.stringify(trekHighlights));
    }
    formData.append("trekInclusions", JSON.stringify(trekInclusions));
    formData.append("trekExclusions", JSON.stringify(trekExclusions));
    formData.append(
      "trekCancellationPolicy",
      JSON.stringify(trekCancellationPolicy)
    );

    images.forEach((image) => {
      formData.append("trekImage", image);
    });

    try {
      await mutation.mutateAsync({ id: trekId, formData });

      setSuccess("Trek updated successfully!");
      resetForm();
    } catch (err) {
      setError("Failed to update trek. Please try again.");
    }
  };

  const resetForm = () => {
    setTrekName("");
    setTrekTitle("");
    setTrekOffer("");
    setTrekDifficulty("easy");
    setSuitableForAge("Suitable For All");
    setAltitude(0);
    setTrekLocation("");
    setTrekDescription("");
    setTrekSubDescription([{ descTitle: "", desc: "" }]);

    setTrekInfo([]);
    setTrekHighlights([]);
    setTrekType("");
    setTrekInclusions([]);
    setTrekExclusions([]);
    setTrekCancellationPolicy([]);
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
      <div className="w-full max-w-8xl flex flex-col">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg gap-5">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Edit Trek
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
                  <option value="hide">Null</option>
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
                  id="suitableForAge"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={suitableForAge}
                  onChange={(e) => setSuitableForAge(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col flex-1">
                <label htmlFor="altitude" className="mb-2 text-gray-700">
                  Duration
                </label>
                <input
                  type="text"
                  id="altitude"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={altitude}
                  onChange={(e) => setAltitude(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="trekOffer" className="mb-2 text-gray-700">
                  Trek Offer
                </label>
                <textarea
                  id="trekOffer"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={trekOffer}
                  onChange={(e) => setTrekOffer(e.target.value)}
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

              <div className="flex flex-col flex-1">
                <label htmlFor="trekDescription" className="mb-2 text-gray-700">
                  Trek Type
                </label>

                <DropDownCheckBoxForTrekType
                  trekType={trekType}
                  setTrekType={setTrekType}
                  setTrekTypeId={setTrekTypeId}
                  trekTypeId={trekTypeId}
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

            <hr className="h-4" />

            <h1 className="text-2xl font-bold text-gray-700">Trek Notes</h1>
            <div className="flex gap-5">
              <AddHighlightsInTrek
                trekHighlights={trekHighlights}
                setTrekHighlights={setTrekHighlights}
              />
            </div>

            <hr className="h-4" />

            <h1 className="text-2xl font-bold text-gray-700">
              Trek Information
            </h1>
            <div className="flex gap-5">
              <AddInfoForTrek trekInfo={trekInfo} setTrekInfo={setTrekInfo} />
            </div>

            <hr className="h-4" />

            <h1 className="text-2xl font-bold text-gray-700">
              Inclusion For Trek
            </h1>
            <div className="flex gap-5">
              <AddInclusionForTrek
                trekInclusions={trekInclusions}
                setTrekInclusions={setTrekInclusions}
              />
            </div>

            <hr className="h-4" />

            <h1 className="text-2xl font-bold text-gray-700">
              Exclusion For Trek
            </h1>
            <div className="flex gap-5">
              <AddExclusionForTrek
                trekExclusions={trekExclusions}
                setTrekExclusions={setTrekExclusions}
              />
            </div>

            <hr className="h-4" />

            <h1 className="text-2xl font-bold text-gray-700">
              Cancellation Policy For Trek
            </h1>
            <div className="flex gap-5">
              <AddCancellationPolicyForTrek
                trekCancellationPolicy={trekCancellationPolicy}
                setTrekCancellationPolicy={setTrekCancellationPolicy}
              />
            </div>

            <hr className="h-4" />

            <div className="flex flex-col">
              <label htmlFor="trekImages" className="mb-2 text-gray-700">
                Upload Trek Images
              </label>
              <input
                type="file"
                id="trekImages"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
              <div className="flex gap-2 mt-2">
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
                      className="absolute top-0 right-0 text-red-500"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-5">
              <button
                type="button"
                onClick={() => setOpenTrekForm(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Saving Changes" : "Submit Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingSpinner />
        </div>
      )} */}
    </>
  );
}

export default EditTrekForm;
