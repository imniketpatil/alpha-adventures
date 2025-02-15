import React from "react";
import AboutUs from "/images/About Us.jpg";
import OurVision from "/images/Our Vision Main.jpg";
import OurMission from "/images/Our Mission.jpg";
import WeAim from "/images/We aim to_.jpg";
import OurCommitment from "/images/IMG_7465.jpg";

const sections = [
  {
    title: "About Us",
    text: (
      <>
        Founded on February 6, 2018, Alpha Adventures was born from a profound
        love for nature and a desire to share the awe-inspiring beauty of the
        world with others.
        <br />
        <br />
        Our journey began in December 2017, after an unforgettable trek to
        Chandrashila and the Tunganath Shiva Temple - the highest Shiva temple
        in the world. This transformative experience ignited our passion and set
        us on a mission to create an adventure travel company dedicated to
        exploring the great outdoors while preserving its pristine beauty.
      </>
    ),
    imageUrl: AboutUs,
  },
  {
    title: "Our Vision",
    text: (
      <>
        At Alpha Adventures, we believe in living harmoniously with nature,
        fostering a deep connection, love, and respect for the wild. Our vision
        is to cultivate a community that values and protects the environment,
        ensuring that future generations can also bask in the glory of untouched
        landscapes and thriving wildlife.
        <br />
        <br />
        We are driven by the desire to inspire, motivate, and educate. Our
        mission is to empower individuals to explore beyond their horizons,
        discover their potential, and embrace a healthier, more active
        lifestyle.
      </>
    ),
    imageUrl: OurVision,
  },
];

const Aims = [
  {
    title: "We aim to:",
    points: [
      {
        heading: "Develop a Deep Connection with Nature",
        text: "Encourage love and compassion for the environment and its inhabitants. Promote Eco-friendly Practices: Advocate for nature conservation and sustainable living to combat global environmental challenges.",
      },
      {
        heading: "Promote Eco-friendly Practices:",
        text: "Advocate for nature conservation and sustainable living to combat global environmental challenges.",
      },
      {
        heading: "Encourage Health and Fitness",
        text: "Inspire people to stay active, take up travel, and ignite their passion for self-improvement.",
      },
      {
        heading: "Provide Unforgettable Experiences",
        text: "Deliver quality tours that create lasting memories and foster a lifelong appreciation for the natural world.",
      },
    ],
    imageUrl: WeAim,
  },
  // Add other sections here if needed
];

function Details() {
  return (
    <section className="text-gray-700 bg-white body-font lg:mt-0 mt-5 font-body">
      <div className="container px-5 py-10 mx-auto flex flex-col gap-5 md:gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-5 flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col gap-8 w-full h-auto">
              <h1 className="text-start font-semibold text-2xl mt-10 text-gray-700">
                {section.title}
              </h1>
              <p className="text-md lg:text-lg font-light mb-10">
                {section.text}
              </p>
            </div>
            <div className="w-full h-auto flex justify-center items-center">
              <img
                className="object-cover object-center max-h-[400px] w-auto md:w-auto aspect-video"
                src={section.imageUrl}
                alt={`${section.title} Image`}
              />
            </div>
          </div>
        ))}
        <div className="container px-5 mx-auto flex flex-col gap-10 md:gap-20">
          {Aims.map((aim, index) => (
            <div
              key={index}
              className={`flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-5 flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex flex-col gap-8 w-full h-auto">
                <h1 className="text-start font-semibold text-2xl text-gray-700">
                  {aim.title}
                </h1>
                <ul className="text-lg lg:text-lg font-light mb-10 flex flex-col gap-4">
                  {aim.points.map((point, i) => (
                    <li key={i} className="flex flex-col gap-2">
                      <span className="font-medium">{point.heading}</span>
                      <span>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-auto flex justify-center items-center">
                <img
                  className="object-cover object-center max-h-[600px] w-auto md:w-auto "
                  src={aim.imageUrl}
                  alt={`${aim.title} Image`}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          key=""
          className={`flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-5 flex-col md:flex-row-reverse`}
        >
          <div className="flex flex-col gap-8 w-full h-auto">
            <h1 className="text-start font-semibold text-2xl mt-10 text-gray-700">
              Our Commitment
            </h1>
            <p className="text-md lg:text-lg font-light mb-10">
              We are committed to seeing our country become a beacon of fitness,
              responsibility, and care for wildlife and nature. From the
              majestic Himalayas to the lush Western Ghats, the serene Eastern
              Ghats, the rugged Satpura and Vindhya Ranges, and the ancient
              Aravalis, our guided tours are designed to showcase the beauty of
              India's diverse landscapes while promoting environmental
              stewardship.
              <br />
              <br />
              We take pride in organizing eco-conscious adventures that leave a
              minimal footprint and a positive impact on the communities and
              ecosystems we explore.
            </p>
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <img
              className="object-cover object-center max-h-[400px] h-auto md:h-auto aspect-video"
              src={OurCommitment}
              alt="Image Error"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
