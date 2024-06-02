import React from "react";

const Treks = () => {
  const treksDetails = [
    {
      id: 1,
      title: "Sahyadri Treks",
      description:
        "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      image:
        "https://images.pexels.com/photos/14091088/pexels-photo-14091088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Himalayan Treks",
      description:
        "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      image:
        "https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Backpacking Treks",
      description:
        "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      image:
        "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Packages",
      description:
        "Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      image: "https://dummyimage.com/1206x506",
    },
  ];

  return (
    <section className="text-black  bg-white body-font lg:mt-10 mt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-800 rounded overflow-hidden">
            <div className="w-24 h-full bg-yellow-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
            <h1 className="sm:w-2/5 text-black font-medium title-font text-4xl mb-1 sm:mb-0">
              Trek Plans
            </h1>
            {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
          {treksDetails.map((trek) => (
            <div
              key={trek.id}
              className="trek-card p-4 lg:w-1/4 sm:w-1/2 sm:mb-0 mb-6 cursor-pointer"
            >
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={trek.image}
                />
              </div>
              <h2 className="title text-xl font-medium title-font text-black mt-5">
                {trek.title}
              </h2>
              <p className="text-base leading-relaxed mt-2">
                {trek.description}
              </p>
              <a
                className="text-indigo-400 inline-flex items-center mt-3"
                href="#learn-more"
              >
                Learn More
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treks;
