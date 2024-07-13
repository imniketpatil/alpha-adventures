import React, { useContext, useState, useEffect } from "react";
import TestimonialEditContext from "../context/TestimonialEditContext";
import TestimonialIdContext from "../context/TestimonialIdContext";
import { useQuery } from "@tanstack/react-query";
import useGetTestimonialForm from "../hooks/useGetTestimonailForm.js";
import useChangeTestimonial from "../hooks/useChangeTestimonial";

const EditTestimonial = ({ testimonialId, value }) => {
  const [testimonial, setTestimonial] = useState({
    name: "",
    rating: 1,
    comment: "",
    work: "",
    images: null, // State for initial image
  });
  const [success, setSuccess] = useState(null);
  const [newImage, setNewImage] = useState(null); // State for newly uploaded image

  const { setEditForm } = useContext(TestimonialEditContext);
  const { IdValue } = useContext(TestimonialIdContext);

  const mutation = useChangeTestimonial();

  console.log(`Editing testimonial with ID: ${IdValue}`);

  const {
    data: fetchedTestimonial,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["SingleTestimonial", IdValue], // Use IdValue in the queryKey
    queryFn: async () => {
      try {
        return await useGetTestimonialForm({ id: IdValue });
      } catch (error) {
        console.error("Error fetching testimonial:", error);
        throw new Error("Failed to fetch testimonial.");
      }
    },
  });

  // Update testimonial state when fetchedTestimonial changes
  useEffect(() => {
    if (fetchedTestimonial) {
      setTestimonial(fetchedTestimonial);
    }
  }, [fetchedTestimonial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setNewImage(file);
    } else {
      setNewImage(null); // Clear newImage state if no file selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("id", IdValue); // Ensure ID is included
      formData.append("name", testimonial.name || fetchedTestimonial.name);
      formData.append(
        "rating",
        testimonial.rating.toString() || fetchedTestimonial.rating.toString()
      );
      formData.append(
        "comment",
        testimonial.comment || fetchedTestimonial.comment
      );
      formData.append("work", testimonial.work || fetchedTestimonial.work);
      formData.append("testimonialAvatar", newImage || testimonial.images);

      console.log("formData", formData);
      mutation.mutate(formData);
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-70 flex justify-center items-center">
      <div className="w-content max-w-2xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Edit Testimonial
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={testimonial.name}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="rating" className="text-gray-800 mb-2">
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={testimonial.rating}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  min="1"
                  max="5"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="comment" className="text-gray-800 mb-2">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={testimonial.comment}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="work" className="text-gray-800 mb-2">
                Work
              </label>
              <input
                type="text"
                id="work"
                name="work"
                value={testimonial.work}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex">
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
                testimonial.images && (
                  <div className="flex justify-center">
                    <img
                      src={testimonial.images}
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
                Update Testimonial
              </button>
              <button
                type="button"
                onClick={() => setEditForm(false)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
          {error && <div className="text-red-500 mt-4">{error.message}</div>}
          {success && <div className="text-green-500 mt-4">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default EditTestimonial;
