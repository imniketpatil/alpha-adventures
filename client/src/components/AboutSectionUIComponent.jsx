import React, { useEffect, useState } from "react";
import AboutUsBannerBG from "/images/pexels-photo-2105416.png";

function AboutSectionUIComponent() {
  const achievements = [
    {
      label: "Years of Experience",
      value: 6,
    },
    {
      label: "Happy Trekkers",
      value: 5000,
    },
    {
      label: "Successfully Treks",
      value: 100,
    },
  ];

  const [counters, setCounters] = useState(achievements.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter, index) =>
          counter < achievements[index].value
            ? counter + 30
            : achievements[index].value
        )
      );
    }, 10);

    return () => clearInterval(interval);
  }, [achievements]);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 font-normal font-body">
      <img
        src={AboutUsBannerBG}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-80"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 font-normal">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-yellow-500 sm:text-4xl">
            Alpha Adventures.
          </h2>
          <p className="mt-6 text-lg leading-8 font-normal text-white">
            Welcome to{" "}
            <span className="text-yellow-500 font-normal">
              Alpha Adventures
            </span>
            , your premier adventure travel partner based in{" "}
            <span className="text-yellow-500 font-normal">
              The Heart of Nagpur.
            </span>{" "}
            With over{" "}
            <span className="text-yellow-500 font-normal"> 6 Years </span> of
            unparalleled experience, we specialize in curating unforgettable
            trekking experiences for adventure enthusiasts. Our commitment to
            safety, excitement, and exploration has garnered the trust and
            smiles of over{" "}
            <span className="text-yellow-500 font-normal">
              {" "}
              5,000 Happy Trekkers{" "}
            </span>
            .
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none font-normal">
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-lg  leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <span href="#" className="hover:cursor-pointer">
              Learn More About Our Treks <span aria-hidden="true">&rarr;</span>
            </span>

            <span href="#" className="hover:cursor-pointer">
              Meet our Leaders <span aria-hidden="true">&rarr;</span>
            </span>

            <span href="#" className="hover:cursor-pointer">
              Meet our Guides <span aria-hidden="true">&rarr;</span>
            </span>
          </div> */}
          <dl
            id="achievements"
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col-reverse font-normal">
                <dt className="text-md leading-7 text-gray-100">
                  {achievement.label}
                </dt>
                <dd className="text-xl font-bold leading-9 tracking-tight text-white">
                  {counters[index]}+
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionUIComponent;
