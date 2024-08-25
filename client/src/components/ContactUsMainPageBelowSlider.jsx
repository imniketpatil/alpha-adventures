import React from "react";

function ContactUsMainPageBelowSlider() {
  return (
    <div className="bg-[#3a652d]  text-white p-4 flex justify-center">
      <div className="max-w-[1400px] flex flex-col lg:flex-row items-start justify-around lg:gap-6">
        <div className="mb-2 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold">
            Have questions? Speak to our expert Trek Advisors
          </h2>
        </div>
        <div>
          <p className="text-md lg:text-lg">
            We have an expert team of Trek Advisors to help you choose the right
            trek.
          </p>
          <p className="text-md lg:text-lg hidden lg:block">
            So if you have questions like, "Can I do this trek?" or "Who else is
            trekking?", please get in touch.
          </p>
          <span>
            <a
              href=""
              className="text-yellow-400 font-bold underline transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              aria-label="Talk to our Trek Advisors"
            >
              Talk to our Trek Advisors
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactUsMainPageBelowSlider;
