// TestimonialForm.js
import React, { useState } from "react";
import useCreateTrekGuide from "../hooks/useCreateTrekGuide";

function CreateTrekGuideForm({ setOpenTrekGuideForm }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [experience, setExperience] = useState(null);
  const [image, setImage] = useState(null);
  const mutation = useCreateTrekGuide();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !bio || !experience || !instagramId) {
      console.error("All fields are required.");
      return;
    }
    console.log("Submitting Trek Guide form with values:", {
      name,
      bio,
      instagramId,
      experience,
      image,
    });
    const formData = new FormData();
    formData.append("name", name);
    formData.append("experience", experience.toString()); // Convert rating to string
    formData.append("bio", bio);
    formData.append("instagramId", instagramId);
    formData.append("guideAvatar", image);
    mutation.mutate(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-2 justify-center items-center z-10">
      <div className="w-[70%] max-w-2xl">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Submit Trek Guide
          </h2>
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
                <label htmlFor="rating" className="mb-2 text-gray-700">
                  experience
                </label>
                <input
                  type="number"
                  id="rating"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={experience}
                  onChange={(e) => setExperience(parseInt(e.target.value))}
                  min="1"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="comment" className="mb-2 text-gray-700">
                bio
              </label>
              <textarea
                id="comment"
                className="p-2 border border-gray-300 rounded-lg"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="work" className="mb-2 text-gray-700">
                Instagram Id
              </label>
              <input
                type="text"
                id="work"
                className="p-2 border border-gray-300 rounded-lg"
                value={instagramId}
                onChange={(e) => setInstagramId(e.target.value)}
                required
              />
            </div>
            <div className="flex  items-center justify-between">
              <div className="flex flex-col">
                <label htmlFor="image" className="mb-2 text-gray-700">
                  Image (Upload one)
                </label>
                <input
                  type="file"
                  id="image"
                  className="p-2 border border-gray-300 rounded-lg"
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
              </div>
              {image && (
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded"
                    className="max-w-[200px] mt-2 rounded-lg"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Add Trek Guide
              </button>
              <button
                type="button"
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setOpenTrekGuideForm(false)}
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

export default CreateTrekGuideForm;
