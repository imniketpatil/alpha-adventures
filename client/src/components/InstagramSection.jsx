import React from "react";

function InstagramSection() {
  return (
    <div className="px-5 pb-5 font-body flex flex-col gap-5 md:gap-10 bg-slate-100">
      <div className="flex m-4 sm:m-4 mx-4 mb-20 items-center justify-center gap-10 flex-col">
        <div className="flex flex-col gap-8 w-full h-auto items-center justify-center">
          <h1 className="text-start font-bold text-2xl mt-10 text-gray-700">
            Our Instagram Community
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="relative flex justify-center items-center w-full max-w-[600px] pb-[100%] lg:pb-[40%] h-0">
            {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.instagram.com/alphaadventures.in/embed/"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramSection;
