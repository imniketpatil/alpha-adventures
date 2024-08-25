import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import TrekGuideIdContext from "../context/TrekGuideIdContext.js";
import TrekGuideEditContext from "../context/TrekGuideEditContext.js";
import useChangeTrekGuide from "../hooks/useChangeTrekGuide.js";
import useGetTrekGuide from "../hooks/useGetTrekGuide.js";

const EditTrekGuideForm = () => {
  const [trekGuide, setTrekGuide] = useState({
    name: "",
    experience: 1,
    bio: "",
    instagramId: "",
    images: null,
  });
  const [newImage, setNewImage] = useState(null);

  const { IdValue } = useContext(TrekGuideIdContext);
  const { setEditForm } = useContext(TrekGuideEditContext);

  const mutation = useChangeTrekGuide();

  const {
    data: fetchedTrekGuide,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getSingleGuide", IdValue],
    queryFn: async () => {
      return useGetTrekGuide({ id: IdValue });
    },
  });

  useEffect(() => {
    if (fetchedTrekGuide) {
      setTrekGuide({
        name: fetchedTrekGuide.name || "",
        experience: fetchedTrekGuide.experience || 1,
        bio: fetchedTrekGuide.bio || "",
        instagramId: fetchedTrekGuide.instagramId || "",
        images: fetchedTrekGuide.images || null,
      });
    }
  }, [fetchedTrekGuide]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrekGuide((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setNewImage(file);
    } else {
      setNewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    setEditForm(false);
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("id", IdValue);
      formData.append("name", trekGuide.name);
      formData.append("experience", trekGuide.experience.toString());
      formData.append("bio", trekGuide.bio);
      formData.append("instagramId", trekGuide.instagramId);

      if (newImage) {
        formData.append("guideAvatar", newImage);
      } else if (fetchedTrekGuide.images) {
        formData.append("guideAvatar", fetchedTrekGuide.images);
      }

      mutation.mutate(formData);
    } catch (error) {
      console.error("Error updating trek guide:", error);
    }
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-2 justify-center items-center z-10 overflow-scroll">
      <div className="w-[70%] max-w-2xl">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Edit Trek Guide
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
                  name="name"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={trekGuide.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="experience" className="mb-2 text-gray-700">
                  Experience
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={trekGuide.experience}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="bio" className="mb-2 text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekGuide.bio}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="instagramId" className="mb-2 text-gray-700">
                Instagram Id
              </label>
              <input
                type="text"
                id="instagramId"
                name="instagramId"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekGuide.instagramId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
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
                />
              </div>

              {newImage ? (
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(newImage)}
                    alt="Uploaded"
                    className="max-w-[200px] mt-2 rounded-lg"
                  />
                </div>
              ) : (
                trekGuide.images && (
                  <div className="flex justify-center">
                    <img
                      src={trekGuide.images}
                      alt="Uploaded"
                      className="max-w-[200px] mt-2 rounded-lg"
                    />
                  </div>
                )
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Update Trek Guide
              </button>
              <button
                type="button"
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setEditForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTrekGuideForm;
