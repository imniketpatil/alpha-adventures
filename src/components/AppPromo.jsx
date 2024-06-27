import React from "react";
import { useNavigate } from "react-router-dom";

const AppPromo = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8  ">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset="1" stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left md:pb-16 pb-20 ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Take A Break.
              <br />
              Book Your Next Adventure Trek Now !!!
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://wa.me/919403110937?text=Hey%21%20We%20are%20Alpha%20Adventures%2C%20your%20adventure%20travel%20partner.%20How%20can%20we%20assist%20you%3F"
                target="_black"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:cursor-pointer hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <span
                className="text-sm font-semibold leading-6 text-white hover:cursor-pointer"
                onClick={() => navigate("/alpha-adventures/about")}
              >
                Know more About Us <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-0 hidden md:block">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none roundedl-md  bg-white/5 ring-1 ring-white/10"
              src="https://images.pexels.com/photos/3337153/pexels-photo-3337153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="App screenshot"
              width="1824"
              height="1080"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromo;
