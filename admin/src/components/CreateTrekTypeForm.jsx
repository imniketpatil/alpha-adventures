import React, { useState } from "react";
import useCreateTrekType from "../hooks/useCreateTrekType";

function CreateTrekGuideForm({ setOpenTrekTypeForm }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const mutation = useCreateTrekType();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      console.error("All fields are required.");
      return;
    }
    // console.log("Submitting Trek Guide form with values:", {
    //   name,
    //   description,
    //   image,
    // });
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("trekTypeImage", image);
    mutation.mutate(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-2 justify-center items-center z-10 overflow-scroll">
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
                <label htmlFor="description" className="mb-2 text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
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
                onClick={() => setOpenTrekTypeForm(false)}
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
