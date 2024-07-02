import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TrekkingPoint = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="container mx-auto px-8 py-8 lg:py-40 font-body">
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md   min-h-[20rem] items-end overflow-hidden">
          <img
            src="https://findyouradventure.in/wp-content/uploads/2022/09/259964698_747358246191714_6973046184021662842_n-1200x900.jpg"
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="p-6 relative flex flex-col justify-around h-full">
            <div>
              <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-white">
                Kalsubai Peak Trek
                <br />
              </h4>
            </div>
            <div>
              <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal line-clamp">
                <span className="text-2xl font-semibold">
                  The Most Loved Trek in the Sahyadri Mountains
                </span>
                <br />
                <br />
                Kalsubai, also known as the "Everest of Maharashtra," is the
                highest peak in the Western Ghats, standing tall at 5,400 feet
                (1,646 meters). It is located in the Ahmednagar district of
                Maharashtra, within the Kalsubai Harishchandragad Wildlife
                Sanctuary.
              </p>
            </div>
            <div className="text-white ">
              <button
                type="button"
                className="bg-blue-700 text-white p-4 rounded-full font-semibold"
                onClick={() =>
                  navigate(
                    "/alpha-adventures/Sahyadri Treks/Kalsubai Peak Trek"
                  )
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-clip-border  bg-transparent text-gray-700 shadow-md relative  min-h-[30rem] items-end overflow-hidden rounded-xl">
          <img
            src="https://media1.thrillophilia.com/filestore/lxqfbi6wqxb62ux2nl9rfo36gvq1_WhatsApp_Image_2022-10-09_at_20_57_12.jpeg?dpr=1.5&w=1280"
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="p-6 relative flex flex-col justify-around h-full">
            <div>
              <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-white">
                Ratangad Trek
                <br />
              </h4>
            </div>
            <div>
              <p className="block antialiased font-sans text-base  leading-relaxed text-white my-2 font-normal">
                <span className="text-2xl font-semibold">
                  The Jewel of the Sahyadris
                </span>
                <br />
                <br />
                At an altitude of 4,255 feet, Ratangad Peak is known for its
                majestic views and historical significance. It is believed to be
                one of the oldest forts in Maharashtra, dating back to the 12th
                century. As you trek through the rugged terrain, you will come
                across remnants of the past, adding a touch of mystery to your
                journey.
              </p>
            </div>
            <div className="text-white ">
              <button
                type="button"
                className="bg-blue-700 text-white p-4 rounded-full font-semibold"
                onClick={() =>
                  navigate("/alpha-adventures/Sahyadri Treks/Ratangad Trek")
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative  min-h-[30rem] items-end overflow-hidden">
          <img
            src="https://nomadsofindia.com/wp-content/uploads/2022/07/Harishchandragad-5.jpg.webp"
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="p-6 relative flex flex-col justify-around h-full">
            <div>
              <h4 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-snug text-white">
                Harishchandragad Trek
                <br />
              </h4>
            </div>
            <div>
              <p className="block antialiased font-sans text-base  leading-relaxed text-white my-2 font-normal">
                <span className="text-2xl font-semibold">
                  The Jewel of the Sahyadris
                </span>
                <br />
                <br />
                At an altitude of 4,255 feet, Ratangad Peak is known for its
                majestic views and historical significance. It is believed to be
                one of the oldest forts in Maharashtra, dating back to the 12th
                century. As you trek through the rugged terrain, you will come
                across remnants of the past, adding a touch of mystery to your
                journey.
              </p>
            </div>
            <div className="text-white ">
              <button
                type="button"
                className="bg-blue-700 text-white p-4 rounded-full font-semibold"
                onClick={() =>
                  navigate(
                    "/alpha-adventures/Sahyadri Treks/Harishchandragad Trek"
                  )
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekkingPoint;
