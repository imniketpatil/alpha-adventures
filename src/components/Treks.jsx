import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Treks = () => {
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  const treksDetails = [
    {
      id: 1,
      title: "Sahyadri Treks",
      description:
        "The Saydhri Trek is a captivating adventure in the Western Ghats of India, known for its diverse terrain including lush forests, hills, and valleys. This moderately challenging trek offers stunning views, refreshing streams, and picturesque waterfalls. Along the way, trekkers can interact with local villagers and experience their traditional way of life. Combining natural beauty, cultural immersion, and a rewarding physical challenge, the Saydhri Trek is a memorable journey for all.",
      image:
        "https://images.pexels.com/photos/14091088/pexels-photo-14091088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Himalayan Treks",
      description:
        "The Himalayan trek is an awe-inspiring adventure through diverse landscapes, from lush valleys and dense forests to alpine meadows and snow-capped peaks. Trekkers enjoy breathtaking views of the world's highest mountains, including Everest and Annapurna. Suitable for all skill levels, the trek includes encounters with glacial rivers, serene lakes, and picturesque villages, offering a unique cultural experience with the friendly locals. This trek is both a physical challenge and a spiritual journey, providing a profound connection with nature and a sense of inner peace amidst the majestic Himalayas.",
      image:
        "https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Backpacking Treks",
      description:
        "Backpacking treks are thrilling adventures through varied landscapes, combining exploration with self-sufficiency in nature. These journeys cater to all skill levels, offering cultural encounters and serene moments amidst breathtaking scenery, making each trip a memorable exploration of the outdoors.",
      image:
        "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    // {
    //   id: 4,
    //   title: "Packages",
    //   description:
    //     "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
    //   image: "https://dummyimage.com/1206x506",
    // },
  ];

  const handleTrekClick = (title) => {
    setTitle(title);
    console.log("Selected Title:", title);
    navigate(`/alpha-adventures/trek/${title}`);
  };

  return (
    <section className="text-black  bg-white body-font lg:mt-0 mt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col ">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-yellow-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6 items-center justify-center">
            <h1 className="sm:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0 text-center">
              Treks And Packages
            </h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 items-center justify-center lg:gap-14 ">
          {treksDetails.map((trek) => (
            <div
              key={trek.id}
              className="trek-card p-4 lg:w-1/4 sm:w-1/2 sm:mb-0 mb-6 cursor-pointer shadow-xl border-2 border-slate-200  rounded-lg"
              onClick={() => handleTrekClick(trek.title)}
            >
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={trek.image}
                />
              </div>
              <h2 className="title text-2xl font-bold title-font text-black mt-5">
                {trek.title}
              </h2>
              <p className="text-base leading-relaxed font-semibold mt-2 line-clamp-5">
                {trek.description}
              </p>
              <span
                className="text-indigo-400 inline-flex items-center mt-3 font-bold"
                href="#learn-more"
              >
                More About {trek.title}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treks;
