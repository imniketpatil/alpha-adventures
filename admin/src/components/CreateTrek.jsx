import React, { useState } from "react";
import DropDownCheckBoxForGuide from "./DropDownCheckBoxForGuide";
import DropDownCheckBoxForInclusions from "./DropDownCheckBoxForInclusions";
import DropDownCheckBoxForTrekType from "./DropDownCheckBoxForTrekType";
import AddHighlightsInTrek from "./AddHighlightsInTrek";
import AddDateForTrek from "./AddDateForTrek";

function CreateTrek({ setOpenTrekForm }) {
  const [name, setName] = useState("");
  const [highlights, setHighlights] = useState([]);
  const [selectedInclusionsOption, setInclusionsSelectedOption] = useState([]);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [trektype, setTrekType] = useState("");
  const [trekGuide, setTrekGuide] = useState([]);

  const [difficulty, setDifficulty] = useState("easy");
  const [price, setPrice] = useState(0);
  const [dates, setDates] = useState([{ startDate: "", lastDate: "" }]);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !highlights.length ||
      !description ||
      !location ||
      !price ||
      !dates.length ||
      dates.some((date) => !date.startDate || !date.lastDate)
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("highlights", JSON.stringify(highlights));
    formData.append("description", description);
    formData.append("location", location);
    formData.append("difficulty", difficulty);
    formData.append("price", price);
    formData.append("trektype", trektype);
    formData.append("trekGuide", JSON.stringify(trekGuide));

    formData.append("dates", JSON.stringify(dates));
    formData.append("inclusions", JSON.stringify(selectedInclusionsOption));

    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      // Perform your mutation or API call here using formData
      // await mutation.mutateAsync(formData);

      setSuccess("Trek created successfully!");
      resetForm();
      console.log(formData);
    } catch (err) {
      setError("Failed to create trek. Please try again.");
    }
  };

  const resetForm = () => {
    setName("");
    setHighlights([]);
    setDescription("");
    setLocation("");
    setDifficulty("easy");
    setPrice(0);
    setImages([]);
    setImagePreviews([]);
    setDates([{ startDate: "", lastDate: "" }]);
    setTrekGuide([]);
    setInclusionsSelectedOption([]);
    setTrekType("");
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-2 justify-center items-center z-10 overflow-scroll">
      <div className="w-[90%] max-w-8xl ">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Submit New Trek
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form className="flex flex-col gap-5 h-[80%]" onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <div className="flex flex-col flex-1">
                <label htmlFor="name" className="mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="location" className="mb-2 text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col flex-1">
                <label htmlFor="trekguide" className="mb-2 text-gray-700">
                  Trek Guide
                </label>
                <DropDownCheckBoxForGuide setTrekGuide={setTrekGuide} />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="trektype" className="mb-2 text-gray-700">
                  Trek Type
                </label>
                <DropDownCheckBoxForTrekType setTrekType={setTrekType} />
              </div>

              <div className="flex flex-col flex-1">
                <label htmlFor="trektype" className="mb-2 text-gray-700">
                  Inclusions
                </label>
                <DropDownCheckBoxForInclusions
                  setInclusionsSelectedOption={setInclusionsSelectedOption}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="highlight" className="mb-2 text-gray-700">
                Highlight
              </label>
              <AddHighlightsInTrek setHighlights={setHighlights} />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="highlight" className="mb-2 text-gray-700">
                Dates
              </label>
              <AddDateForTrek setDateList={setDates} />
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="description" className="mb-2 text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="difficulty" className="mb-2 text-gray-700">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="challenging">Challenging</option>
                  <option value="difficult">Difficult</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="price" className="mb-2 text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="images" className="mb-2 text-gray-700">
                  Upload Images
                </label>
                <input
                  type="file"
                  id="images"
                  multiple
                  onChange={handleImageChange}
                />
                <div className="flex gap-2 flex-wrap mt-2">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setOpenTrekForm(false)}
                className="ml-4 px-6 py-2 bg-red-500 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTrek;
