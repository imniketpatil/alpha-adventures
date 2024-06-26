import React from "react";

function Details() {
  return (
    <>
      <section className="text-black  bg-white body-font lg:mt-0 mt-10">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col ">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-yellow-500"></div>
            </div>
          </div>
          <div className="flex m-4 sm:m-4 mx-4 mb-16 items-center justify-center gap-10 flex-col ">
            <h1 className="text-start font-bold text-4xl mt-10 w-full">
              <span className="text-yellow-500 ">Explore</span> the Untamed
            </h1>
            <p className="text-xl font-normal mb-10">
              At{" "}
              <span className="text-yellow-500 font-medium">
                Alpha Adventures
              </span>
              , we believe in pushing boundaries and exploring the untamed. Our
              expertly guided treks take you through the most breathtaking
              landscapes, from lush forests to rugged mountains, ensuring every
              journey is as thrilling as it is memorable. Whether you are a
              seasoned trekker or a beginner seeking your first adventure, we
              have something for everyone.
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-yellow-500"></div>
            </div>
          </div>
          <div className="flex m-4 sm:m-4 mx-4 sm:mb-0 mb-16 items-center justify-center gap-10 flex-col">
            <h1 className="text-start font-bold text-4xl mt-10 w-full ">
              Your
              <span className="text-yellow-500 "> Adventure </span> Travel
              Partner
            </h1>
            <p className="text-xl font-normal sm:mb-0 mb-10">
              From the moment you book with us, we are dedicated to making your
              trekking experience seamless and exhilarating. Our knowledgeable
              guides, top-notch equipment, and well-planned itineraries ensure
              that you can focus on what matters most – enjoying your adventure.
              Trust Alpha Adventures to be your steadfast companion on every
              trek, providing you with the support and expertise needed for an
              extraordinary journey. Join us at Alpha Adventures and discover
              why we are Nagpur’s favorite trekking company. Let us help you
              create stories of adventure that you will cherish for a lifetime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
