import React, { useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import TestimonialEditContext from "../context/TestimonialEditContext.js";
import TestimonialIdContext from "../context/TestimonialIdContext.js";
import useChangeTestimonial from "../hooks/useChangeTestimonial.js";
import useGetTestimonailById from "../hooks/useGetTestimonailById.js";

const EditTestimonial = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [work, setWork] = useState("");
  const [trek, setTrek] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [image, setImage] = useState(null);
  const [newImage, setNewImage] = useState(null);

  const { IdValue } = useContext(TestimonialIdContext);
  const { setTestimonialEditForm } = useContext(TestimonialEditContext);
  const mutation = useChangeTestimonial();

  const { data: fetchedTestimonial, err } = useQuery({
    queryKey: ["SingleTestimonial", IdValue],
    queryFn: async () => {
      try {
        return await useGetTestimonailById({ id: IdValue });
      } catch (error) {
        console.error("Error fetching testimonial:", error);
        throw new Error("Failed to fetch testimonial.");
      }
    },
  });

  useEffect(() => {
    if (fetchedTestimonial) {
      setName(fetchedTestimonial.name || "");
      setRating(fetchedTestimonial.rating || 1);
      setComment(fetchedTestimonial.comment || "");
      setWork(fetchedTestimonial.work || "");
      setTrek(fetchedTestimonial.trek || "");
      setImage(fetchedTestimonial.testimonialAvatar || null);
    }
  }, [fetchedTestimonial]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      setNewImage(files[0]);

      const preview = URL.createObjectURL(files[0]);
      setImage(preview);
    } else {
      setNewImage(null);
      setImage(null);
    }
  };

  const handleRemoveImage = () => {
    setNewImage(null);
    setImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !rating || !comment || !work || !trek) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("id", IdValue);
      formData.append("name", name);
      formData.append("rating", rating.toString());
      formData.append("comment", comment);
      formData.append("work", work);
      formData.append("trek", trek);
      if (newImage) {
        formData.append("testimonialAvatar", newImage);
      } else if (image) {
        formData.append("testimonialAvatar", image);
      }

      mutation.mutate(
        { id: IdValue, formData },
        {
          onError: (error) =>
            console.error("Error updating testimonial:", error),
          onSuccess: () => {
            setSuccess("Testimonial updated successfully!");
            // Handle success (e.g., show a success message or redirect)
          },
        }
      );
    } catch (error) {
      console.error("Error preparing form data:", error);
    }
  };

  return (
    <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-2 justify-center items-center z-10 overflow-scroll">
      <div className="w-[70%] max-w-2xl">
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Edit Testimonial
          </h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={rating}
                  onChange={(e) => setRating(parseInt(e.target.value))}
                  min="1"
                  max="5"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="comment" className="mb-2 text-gray-700">
                Comment
              </label>
              <textarea
                id="comment"
                className="p-2 border border-gray-300 rounded-lg"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="work" className="mb-2 text-gray-700">
                Work
              </label>
              <input
                type="text"
                id="work"
                className="p-2 border border-gray-300 rounded-lg"
                value={work}
                onChange={(e) => setWork(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="trek" className="mb-2 text-gray-700">
                Trek
              </label>
              <input
                type="text"
                id="trek"
                className="p-2 border border-gray-300 rounded-lg"
                value={trek}
                onChange={(e) => setTrek(e.target.value)}
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
              {image && (
                <div className="flex justify-center mt-2">
                  <img
                    src={image}
                    alt="Uploaded"
                    className="max-w-[200px] rounded-lg"
                  />
                  <button
                    type="button"
                    className="ml-2 p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={handleRemoveImage}
                  >
                    Remove
                  </button>
                </div>
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
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setTestimonialEditForm(false)}
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

export default EditTestimonial;
