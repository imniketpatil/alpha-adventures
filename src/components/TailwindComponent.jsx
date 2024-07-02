import React, { useState } from "react";

const TailwindComponent = () => {
  const Perks = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Stays",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/693269/pexels-photo-693269.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Meals",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/6307071/pexels-photo-6307071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Transport",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1170184/pexels-photo-1170184.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Guide",
      description:
        "Curabitur aliquam, augue sed scelerisque ultricies, nunc sapien varius sapien, a bibendum magna velit vitae odio.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(Perks[0].image);
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id) => {
    setActiveId(id);
    const perk = Perks.find((perk) => perk.id === id);
    if (perk) {
      setSelectedImage(perk.image);
    }
  };

  return (
    <div className="overflow-hidden bg-slate-100 py-24 font-body sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Explore Beyond Limits, Embrace the Journey
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Better Trek With Us
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none ">
                {Perks.map((perk) => (
                  <div
                    key={perk.id}
                    className={`relative pl-9 p-2 hover:cursor-pointer ${
                      activeId === perk.id
                        ? "shadow-custom p-6 bg-white rounded-lg"
                        : ""
                    }`}
                    onClick={() => handleClick(perk.id)}
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        className={`absolute h-5 w-5 ${
                          activeId === perk.id ? "left-2 top-7" : "left-2 top-4"
                        } text-indigo-600`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {perk.id === 1 && (
                          <>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.24 7.76a6 6 0 11-8.48 8.48 6 6 0 018.48-8.48z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.88 9.88h.01M14.12 14.12h.01M9.88 14.12h.01M14.12 9.88h.01M12 8.25a3.75 3.75 0 103.75 3.75A3.75 3.75 0 0012 8.25z"
                            ></path>
                          </>
                        )}
                        {perk.id === 2 && (
                          <>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 3v4M3 5h4M21 12v3a8.964 8.964 0 01-.43 2.715 4.987 4.987 0 01-3.245 3.215 8.973 8.973 0 01-6.65 0 4.987 4.987 0 01-3.245-3.215A8.964 8.964 0 015 15v-3M12 9a3 3 0 013-3h.03M15 6.03A3 3 0 1118.97 10"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 19.5a3 3 0 003-3H9a3 3 0 003 3z"
                            ></path>
                          </>
                        )}
                        {perk.id === 3 && (
                          <>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8h18M5 19h14M7 8v11M17 8v11M9 12h6M12 15h0M12 9h.01M8 5h8a2 2 0 012 2v2H6V7a2 2 0 012-2z"
                            ></path>
                          </>
                        )}
                        {perk.id === 4 && (
                          <>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v3M12 12v7M16 8.5v6M8 8.5v6M21 12h-3M6 12H3M21 15v2a4 4 0 01-4 4h-2M9 21H7a4 4 0 01-4-4v-2"
                            ></path>
                          </>
                        )}
                      </svg>
                      {perk.title}
                    </dt>
                    <dd className="inline"> {perk.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Selected Perk"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindComponent;
