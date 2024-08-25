import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import TrekTypeEditContext from "../context/TrekTypeEditContext.js";
import TrekTypeIdContext from "../context/TrekTypeIdContext.js";
import useGetTrekType from "../hooks/useGetTrekType.js";
import useChangeTrekType from "../hooks/useChangeTrekType.js";

const EditTrekTypeForm = () => {
  const [trekType, setTrekType] = useState({
    name: "",
    description: "",
    images: null,
  });
  const [newImage, setNewImage] = useState(null);

  const { IdValue } = useContext(TrekTypeIdContext);
  const { setEditForm } = useContext(TrekTypeEditContext);

  const mutation = useChangeTrekType();

  const {
    data: fetchedTrekType,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getSingleTrekType", IdValue],
    queryFn: async () => {
      return useGetTrekType({ id: IdValue });
    },
  });

  useEffect(() => {
    if (fetchedTrekType) {
      setTrekType({
        name: fetchedTrekType.name || "",
        description: fetchedTrekType.description || "",
        images: fetchedTrekType.images || null,
      });
    }
  }, [fetchedTrekType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrekType((prev) => ({
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
      formData.append("name", trekType.name);
      formData.append("description", trekType.description);

      if (newImage) {
        formData.append("trekTypeImage", newImage);
      }

      mutation.mutate(formData);
    } catch (error) {
      console.error("Error updating trek type:", error);
    }
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-2 justify-center items-center z-10">
      <div className="w-[70%] max-w-2xl">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Edit Trek Type
          </h2>
          <form className="flex flex-col gap-5 h-[80%]" onSubmit={handleSubmit}>
            <div className="flex flex-col flex-1">
              <label htmlFor="name" className="mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekType.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="description" className="mb-2 text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="p-2 border border-gray-300 rounded-lg"
                value={trekType.description}
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
                trekType.images && (
                  <div className="flex justify-center">
                    <img
                      src={trekType.images}
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
                Update Trek Type
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

export default EditTrekTypeForm;
