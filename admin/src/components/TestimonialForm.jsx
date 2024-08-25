import React, { useState } from "react";
import useCreateTestimonial from "../hooks/useCreateTestimonial";

function TestimonialForm({ setOpenTestimonialForm }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [work, setWork] = useState("");
  const [trek, setTrek] = useState("");

  const [image, setImage] = useState(null);

  const mutation = useCreateTestimonial();

  const handleSubmit = async (e) => {
    setOpenTestimonialForm(false);
    e.preventDefault();

    if (!name || !comment || !work || !trek || !image) {
      console.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("rating", rating.toString());
    formData.append("comment", comment);
    formData.append("work", work);
    formData.append("trek", trek);
    formData.append("testimonialAvatar", image);
    mutation.mutate(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <>
      <div className="fixed h-full w-full top-0 left-0 bg-slate-400 bg-opacity-70 flex flex-col gap-2 justify-center items-center z-10 overflow-scroll">
        <div className="w-[70%] max-w-2xl">
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col text-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700">
              Submit Testimonial
            </h2>
            <form
              className="flex flex-col gap-5 h-[80%]"
              onSubmit={handleSubmit}
            >
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
                <label htmlFor="work" className="mb-2 text-gray-700">
                  Trek
                </label>
                <input
                  type="text"
                  id="work"
                  className="p-2 border border-gray-300 rounded-lg"
                  value={trek}
                  onChange={(e) => setTrek(e.target.value)}
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
                  Submit Testimonial
                </button>
                <button
                  type="button"
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                  onClick={() => setOpenTestimonialForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialForm;
